import React, { useState, useEffect } from "react";
import NumberImg from "../assets/Images/BackgroundDis.png";
import ConfettiLeft from "../assets/Images/LeftConfetti.png";
import ConfettiRight from "../assets/Images/RightConfetti.png";
import { motion } from "framer-motion";

interface LuckyNumberBarProps {
  triggerRef: React.RefObject<HTMLElement | null>;
}

const LuckyNumberBar: React.FC<LuckyNumberBarProps> = ({ triggerRef }) => {
  const [showBar, setShowBar] = useState(false);

  const [animatedNumbers, setAnimatedNumbers] = useState<string[]>(
    Array(10).fill("0")
  );

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
    const targetNumbers = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 10)
    );
    let frame = 0;
    const maxFrames = 40;
    const interval = setInterval(() => {
      setAnimatedNumbers((prev) =>
        prev.map((_, i) => {
          if (frame < maxFrames) {
            return Math.floor(Math.random() * 10).toString();
          } else {
            if (i === 5 || i === 6) return "X";
            return targetNumbers[i].toString();
          }
        })
      );

      frame++;
      if (frame > maxFrames) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showBar && (
        <div className="fixed top-13 w-full  overflow-hidden z-50 bg-[#252424] py-3 lg:py-4">
          <div className="lg:flex lg:items-center lg:justify-center lg:gap-19 mx-4 xl:mx-0  ">
            <img src={ConfettiLeft} alt="left" className=" " />
            <div className=" flex flex-col lg:flex-row items-center  gap-6">
              <div
                className="bg-[#3F3F3F] lg:w-auto w-[281px] h-[40px] flex items-center justify-between gap-4 text-[#FFFFFF]  rounded-[12px] border py-2  lg:py-3 px-4 border-[var( --border-gradient)]"
                style={{
                  border: "1px solid transparent",
                  borderImage: "var(--border-gradient)",
                }}
              >
                <div className="w-[6px] h-[6px] lg:w-2 lg:h-2  bg-[#8F8F8F] rounded-full"></div>
                <p className="text-[13px] lg:text-[16px] lg:whitespace-nowrap font-[Inter] font-normal leading-[18px] lg:leading-[24px]">
                  Numéro d’Or du jour
                </p>
                <div className="w-[6px] h-[6px] lg:w-2 lg:h-2  bg-[#8F8F8F] rounded-full"></div>
              </div>
              {/*  rolling numbers) */}
              <div className="relative w-[281px] h-[60px] lg:w-[212px] lg:h-[56px]">
                <img
                  src={NumberImg}
                  alt="number-bg"
                  className="w-full h-full object-fit"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-0 px-8 lg:px-4">
                  {animatedNumbers.map((num, index) =>
                    num === "X" ? (
                      <div
                        key={index}
                        className=" flex items-center justify-center bg-gradient-to-b from-white to-[#999999] text-transparent bg-clip-text font-bold font-[Inter] text-[21px] leading-[22px] "
                      >
                        X
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="relative   w-[30px]  h-[50px] overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: 0 }}
                          animate={{ y: `-${Number(num) * 50}px` }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                          {[...Array(10)].map((_, i) => (
                            <div
                              key={i}
                              className="h-[50px] flex items-center justify-center bg-gradient-to-b from-white to-[#999999] text-transparent bg-clip-text font-bold font-[Inter] text-[21px] leading-[22px]"
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
            <img src={ConfettiRight} alt="right" className="hidden xl:block" />
          </div>
        </div>
      )}
    </>
  );
};

export default LuckyNumberBar;
