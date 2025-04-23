import React, { useState, useEffect } from "react";
import NumberImg from "../assets/Images/Background.png";
import ConfettiLeft from "../assets/Images/LeftConfetti.png";
import ConfettiRight from "../assets/Images/RightConfetti.png";

interface LuckyNumberBarProps {
  triggerRef: React.RefObject<HTMLElement | null>;
}

const LuckyNumberBar: React.FC<LuckyNumberBarProps> = ({ triggerRef }) => {
  const [showBar, setShowBar] = useState(false);

  const [animatedNumbers, setAnimatedNumbers] = useState<number[]>([
    0, 0, 0, 0,
  ]);

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
    const targetNumbers = Array.from({ length: 4 }, () =>
      Math.floor(Math.random() * 10)
    );
    let frame = 0;
    const maxFrames = 20;
    const interval = setInterval(() => {
      setAnimatedNumbers((prev) =>
        prev.map((_, i) =>
          frame < maxFrames ? Math.floor(Math.random() * 10) : targetNumbers[i]
        )
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
            <div className=" flex items-center  gap-6">
              <div
                className="bg-[#3F3F3F] md:w-auto w-full  flex items-center justify-between gap-4 text-[#FFFFFF]  rounded-[12px] border py-2  lg:py-3 px-4 border-[var( --border-gradient)]"
                style={{
                  border: "1px solid transparent",
                  borderImage: "var(--border-gradient)",
                }}
              >
                <div className="w-[6px] h-[6px] lg:w-2 lg:h-2  bg-[#8F8F8F] rounded-full"></div>
                <p className="text-[13px] lg:text-[16px] lg:whitespace-nowrap font-[Inter] font-normal leading-[18px] lg:leading-[24px]">
                  Today’s Lucky Number
                </p>
                <div className="w-[6px] h-[6px] lg:w-2 lg:h-2  bg-[#8F8F8F] rounded-full"></div>
              </div>
              {/*  rolling numbers) */}
              <div className="flex justify-center gap-2 mt-1">
                {animatedNumbers.map((num, i) => (
                  <div key={i} className="relative">
                    <img
                      src={NumberImg}
                      alt={`num-${num}`}
                      className="lg:w-10 lg:h-14"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-white to-[#999999] text-transparent bg-clip-text font-bold text-[21px]">
                      {num}
                    </span>
                  </div>
                ))}
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
