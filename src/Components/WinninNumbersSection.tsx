import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWinner } from "../Context/WinnerContext";

const WinningNumbersSection: React.FC = () => {
  const { data, isLoading, error } = useWinner();
  const navigate = useNavigate();

  const [drawData, setDrawData] = useState<
    {
      service: string;
      date: string;
      winningNumber: string;
      winners: string[];
    }[]
  >([]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<"left" | "right">("left");
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!data || !data.results || data.results.length === 0) return;

    const latestDraw = data.results[0];

    const services = [
      "Lucky Number MAX",
      "Lucky Number Eco",
      "Lucky Number Premium",
      "IC Orange Lucky Number Eco",
    ];

    // const services = [
    //   "GLO Lucky Number Max Auto",
    //   "YoUSD Daily LN",
    //   "YoUSD Weekly LN",
    // ];

    const groupedDraws = services
      .map((service) => {
        const result = latestDraw.drawResults.find(
          (r) => r.serviceName === service
        );

        if (!result) return null;

        const formattedNumber = result.winningNumber;
        const winners = Array(result.numWinners).fill(`07${formattedNumber}`);

        return {
          service,
          date: latestDraw.drawDate,
          winningNumber: formattedNumber,
          winners,
        };
      })
      .filter(
        (
          item
        ): item is {
          service: string;
          date: string;
          winningNumber: string;
          winners: string[];
        } => item !== null
      );

    setDrawData(groupedDraws);
  }, [data]);

  // Auto-scroll animation
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || drawData.length === 0) return;

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
  }, [drawData]);

  if (isLoading) {
    return (
      <div className="bg-[#242424] px-4 xl:px-30 py-6 w-full overflow-hidden">
        <div className="w-8 h-8 border-4 border-[#8F8F8F] border-t-transparent mx-auto rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#242424] px-4 xl:px-30 py-6 w-full overflow-hidden">
        <div className="text-red-500 text-center">{error}</div>
      </div>
    );
  }

  if (!drawData.length) {
    return (
      <div className="bg-[#242424] px-4 xl:px-30 py-6 w-full overflow-hidden">
        <div className="text-white text-center">No draw data available</div>
      </div>
    );
  }

  const allScrollItems = drawData.flatMap((entry) =>
    entry.winners.map((winner) => ({
      number: winner,
      service: entry.service,
      date: entry.date,
    }))
  );
  const latestDate = drawData[0].date;

  return (
    <div className="bg-[#242424] px-4 xl:px-30 py-6 w-full overflow-hidden">
      <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-0">
        <div className="flex items-center justify-between xl:justify-center gap-2">
          <div className="flex items-center justify-between xl:justify-center gap-2">
            <h5 className="text-white font-['RethinkSans-SemiBold'] font-semibold text-[16px] leading-[26px] lg:text-[20px] lg:leading-[28px] text-center whitespace-nowrap">
              {latestDate}
            </h5>
            <h5 className="text-white font-['RethinkSans-SemiBold'] font-semibold text-[16px] leading-[26px] lg:text-[20px] lg:leading-[28px] text-center whitespace-nowrap">
              Gagnants: {allScrollItems.length}
            </h5>
          </div>
          <div className="block xl:hidden">
            <button
              className="text-[#8F8F8F] font-[Inter] text-[14px] leading-[22px] font-normal cursor-pointer whitespace-nowrap"
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
          {allScrollItems.map((item, idx) => (
            <div key={idx} className="min-w-fit text-center">
              <h5
                key={idx}
                className="text-[#8F8F8F] font-['RethinkSans-SemiBold'] font-semibold text-center text-[16px] lg:text-[18px] leading-[26px] min-w-fit"
              >
                {item.number}{" "}
              </h5>
              {/* <p className="text-xs font-['RethinkSans-SemiBold'] font-semibold  text-[#666]">
                {item.service}
              </p> */}
            </div>
          ))}
        </div>

        <div className="hidden xl:block pl-0 md:pl-4 border-l md:border-l border-l-[#8F8F8F]">
          <button
            className="text-[#8F8F8F] font-[Inter] text-[14px] leading-[22px] font-normal cursor-pointer hover:text-white whitespace-nowrap"
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
