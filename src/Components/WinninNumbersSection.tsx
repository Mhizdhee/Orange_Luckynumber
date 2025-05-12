import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const phoneNumbers = [
  "070155XX55",
  "070155XX55",
  "070155XX55",
  "070155XX55",
  "070155XX55",
  "070155XX55",
  "070155XX55",
  "070155XX55",
  "070155XX55",
  "070155XX55",
  "070155XX55",
  "070155XX55",
  "070155XX55",
  "070155XX55",
];

const WinningNumbersSection: React.FC = () => {
  const [showAll] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<"left" | "right">("left");
  const animationRef = useRef<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (showAll) return;

    const container = scrollRef.current;
    if (!container) return;

    const speed = 0.8;

    const scroll = () => {
      if (!container) return;

      const maxScroll = container.scrollWidth - container.clientWidth;

      if (directionRef.current === "left") {
        container.scrollLeft += speed;
        if (Math.ceil(container.scrollLeft) >= maxScroll) {
          directionRef.current = "right";
        }
      } else {
        container.scrollLeft -= speed;
        if (Math.floor(container.scrollLeft) <= 0) {
          directionRef.current = "left";
        }
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [showAll]);

  const scrollItems = [...phoneNumbers, ...phoneNumbers];

  // if (showAll) {
  //   return (
  //     <div className="bg-[#121212] px-4 py-6 ">
  //       <div className="max-w-lg mx-auto">
  //         <button
  //           onClick={() => setShowAll(false)}
  //           className="font-[Inter]  text-[14px] leading-[22px] font-normal mb-6 text-[#8F8F8F] hover:text-white cursor-pointer"
  //         >
  //           ← Back
  //         </button>
  //         <div className="max-w-md  bg-[#242424]  pt-18 px-4 pb-4 shadow-md text-white">
  //           <h3 className="lg:text-[24px] text-[18px] leading-[26px] font-['RethinkSans-Bold'] font-bold lg:leading-[32px] text-center mb-4">
  //             22-06-2025 Gagnants
  //           </h3>

  //           <div className="flex flex-col  gap-5  bg-[#151515] overflow-y-auto max-h-96">
  //             <ol className="list-decimal py-6 px-12 space-y-5  font-['RethinkSans-SemiBold'] font-semibold text-[16px] leading-[24px] text-justify text-[#8F8F8F]">
  //               {phoneNumbers.map((num, idx) => (
  //                 <li key={idx} className="">
  //                   {num}
  //                 </li>
  //               ))}
  //             </ol>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="bg-[#242424] px-4 xl:px-30 py-6  w-full overflow-hidden">
      <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-0">
        <div className="flex items-center justify-between xl:justify-center gap-2">
          <div className="flex items-center justify-between xl:justify-center gap-2">
            <h5 className="text-white font-['RethinkSans-SemiBold'] font-semibold text-[18px] leading-[26px] lg:text-[20px] lg:leading-[28px] text-center">
              22-06-2025
            </h5>
            <h5 className="text-white font-['RethinkSans-SemiBold'] font-semibold text-[18px] leading-[26px] lg:text-[20px] lg:leading-[28px] text-center">
              Gagnants
            </h5>
          </div>
          <div className="block xl:hidden">
            <button
              className="text-[#8F8F8F]  font-[Inter]  text-[14px] leading-[22px] font-normal cursor-pointer"
              onClick={() => navigate("/winning-numbers")}
            >
              View All
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex items-center gap-6 ml-0 lg:ml-6 overflow-x-auto scrollbar-hide whitespace-nowrap w-full xl:max-w-[70%]"
        >
          {scrollItems.map((num, idx) => (
            <h5
              key={idx}
              className="text-[#8F8F8F] font-['RethinkSans-SemiBold'] font-semibold  text-center text-[18px] leading-[26px] min-w-fit"
            >
              {num}
            </h5>
          ))}
        </div>

        <div className="hidden xl:block pl-0 md:pl-4 border-l md:border-l border-l-[#8F8F8F]">
          <button
            className="text-[#8F8F8F]  font-[Inter]  text-[14px] leading-[22px] font-normal cursor-pointer hover:text-white"
            onClick={() => navigate("/winning-numbers")}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinningNumbersSection;
