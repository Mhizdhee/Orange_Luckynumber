import React, { useState, useEffect } from "react";
import NumberImg from "../assets/Images/BackgroundDis.png";
import Confettis from "../assets/Images/confettis.png";
import MobileConfettis from "../assets/Images/mobile-confettis.png";
import { motion } from "framer-motion";
import { useWinner } from "../Context/WinnerContext";

interface LuckyNumberBarProps {
  triggerRef: React.RefObject<HTMLElement | null>;
}

const LuckyNumberBar: React.FC<LuckyNumberBarProps> = ({ triggerRef }) => {
  const [showBar, setShowBar] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState<string[]>(
    Array(10).fill("0")
  );
  const { data, isLoading, error } = useWinner();

  // Scroll observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBar(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = triggerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [triggerRef]);

  useEffect(() => {
    if (!isLoading) return;

    const animationInterval = setInterval(() => {
      const randomDigits = Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 10).toString()
      );
      const randomNumber = ["0", "7", "X", "X", ...randomDigits];
      setAnimatedNumbers(randomNumber);
    }, 100);

    return () => clearInterval(animationInterval);
  }, [isLoading]);

  useEffect(() => {
    if (isLoading || !data) return;

    const luckyNumberMax = data.results[0]?.drawResults.find(
      (result) => result.serviceName === "Lucky Number MAX"
    );

    if (!luckyNumberMax || !luckyNumberMax.winningNumber) {
      const fallbackNumber = ["0", "7", "X", "X", "0", "0", "0", "0", "0", "0"];
      setAnimatedNumbers(fallbackNumber);
      setIsAnimating(true);
      return;
    }

    const formattedNumber = ("07" + luckyNumberMax.winningNumber).split("");
    setTimeout(() => {
      setAnimatedNumbers(formattedNumber);
      setTimeout(() => setIsAnimating(true), 100);
    }, 600);
  }, [isLoading, data]);
  return (
    <>
      {showBar && (
        <div className="fixed top-13 w-full z-50">
          <div className="relative w-full overflow-hidden">
            {/* Background Image */}
            <img
              src={Confettis}
              alt="desktop-bg"
              className="hidden md:block w-full h-auto"
            />
            <img
              src={MobileConfettis}
              alt="mobile-bg"
              className="block md:hidden w-full h-auto"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6 ">
              <div
                className="bg-[#3F3F3F] w-[281px] md:w-auto h-[56px]  flex items-center justify-between gap-4 text-white rounded-[12px] border px-4 md:py-3 py-2"
                style={{
                  border: "1px solid transparent",
                  borderImage: "var(--border-gradient)",
                }}
              >
                <div className="w-[6px] h-[6px] md:w-2 md:h-2 bg-[#8F8F8F] rounded-full" />
                <p className="text-[13px] lg:text-[16px] whitespace-nowrap font-[Inter] leading-[18px] lg:leading-[24px]">
                  Numéro d’Or du jour
                </p>
                <div className="w-[6px] h-[6px] md:w-2 md:h-2 bg-[#8F8F8F] rounded-full" />
              </div>

              {/* Rolling number box */}
              <div className="relative w-[281px] md:w-[212px] h-[60px] md:h-[56px]">
                <img
                  src={NumberImg}
                  alt="number-bg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-1 px-8  md:px-4">
                  {animatedNumbers.map((num, index) =>
                    num === "x" || num === "X" ? (
                      <div
                        key={index}
                        className="text-[21px] leading-[22px] font-bold font-[Inter] text-transparent bg-gradient-to-b from-white to-[#999999] bg-clip-text"
                      >
                        X
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="w-[30px] h-[50px] overflow-hidden relative"
                      >
                        <motion.div
                          initial={{ y: 0 }}
                          animate={{ y: `-${Number(num) * 50}px` }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                          {[...Array(10)].map((_, i) => (
                            <div
                              key={i}
                              className="h-[50px] flex items-center justify-center text-[21px] leading-[22px] font-bold font-[Inter] text-transparent bg-gradient-to-b from-white to-[#999999] bg-clip-text"
                            >
                              {i}
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LuckyNumberBar;
