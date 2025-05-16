import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Socials from "../Components/Socials";
import HeroBg from "../assets/Images/heroimg.png";
import Background from "../assets/Images/Background-img.png";
import MobileBackground from "../assets/Images/mobilebg-img .png";
import { useWinner } from "../Context/WinnerContext";

const WinningNumbersPage: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useWinner();
  const [drawData, setDrawData] = useState<
    {
      service: string;
      date: string;
      winningNumber: string;
      winners: string[];
    }[]
  >([]);

  useEffect(() => {
    if (!data || !data.results || data.results.length === 0) return;

    const latestDraw = data.results[0];

    const services = [
      "Lucky Number MAX",
      "Lucky Number Eco",
      "Lucky Number Premium",
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

  const allScrollItems = drawData.flatMap((entry) =>
    entry.winners.map((winner) => ({
      number: winner,
      service: entry.service,
      date: entry.date,
    }))
  );

  const latestDate = drawData.length > 0 ? drawData[0].date : "";

  return (
    <>
      <div className="hidden md:block bg-[#242424] h-screen w-full ">
        <div
          className="hidden md:block  lg:pt-30  relative lg:bg-cover lg:bg-center  lg:bg-no-repeat "
          style={{ backgroundImage: `url(${Background})` }}
        >
          <Navbar />

          <div className="w-full max-w-[1440px] 2xl:mx-auto pt-20 px-4 flex flex-1 items-center justify-center  lg:pl-30">
            <div className="w-full md:w-1/2   ">
              <button
                onClick={() => navigate("/")}
                className="font-[Inter]  text-[14px] leading-[22px] font-normal mb-6 text-[#8F8F8F] hover:text-white cursor-pointer"
              >
                ← Back
              </button>

              <div className="max-w-md  bg-[#242424]   px-4 pb-4 shadow-md text-white">
                <div className="flex items-center gap-2 lg:text-[24px] text-[18px] py-6 leading-[26px] font-['RethinkSans-Bold'] font-bold lg:leading-[32px] text-center">
                  <p> {latestDate}</p>
                  Gagnants: <span> {allScrollItems.length}</span>
                </div>

                <div className="flex flex-col  gap-5  bg-[#151515] overflow-y-auto max-h-120">
                  <ol className="list-decimal py-6 px-12 space-y-5  font-['RethinkSans-SemiBold'] font-semibold text-[16px] leading-[24px] text-justify text-[#8F8F8F]">
                    {allScrollItems.map((item, idx) => (
                      <li key={idx} className="min-w-fit ">
                        <h5 className="text-[#8F8F8F] font-['RethinkSans-SemiBold'] font-semibold text-[16px] lg:text-[18px] leading-[26px]">
                          {item.number}
                        </h5>
                        <p className="text-xs font-['RethinkSans-SemiBold'] font-semibold text-[#666]">
                          {item.service}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden md:block w-1/2 pl-6">
              <img
                src={HeroBg}
                alt="Winning"
                // className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          <Footer />
          <Socials />
        </div>
      </div>
      <div className="md:hidden block  h-screen w-full ">
        <div
          className="block md:hidden bg-no-repeat w-full bg-[#121212] bg-contain"
          style={{ backgroundImage: `url(${MobileBackground})` }}
        >
          <Navbar />

          <div className=" pt-20 px-4 flex flex-col md:flex-row items-center justify-center">
            <div className="w-full  ">
              <button
                onClick={() => navigate("/")}
                className="font-[Inter]  text-[14px] leading-[22px] font-normal mb-6 text-[#8F8F8F] hover:text-white cursor-pointer"
              >
                ← Back
              </button>

              <div className="max-w-lg  bg-[#242424]   px-4 pb-4 shadow-md text-white">
                <h3 className="lg:text-[24px] text-[18px] py-6 leading-[26px] font-['RethinkSans-Bold'] font-bold lg:leading-[32px] text-center">
                  {latestDate} Gagnants: {allScrollItems.length}
                </h3>

                <div className="flex flex-col  gap-5  bg-[#151515] overflow-y-auto max-h-120">
                  <ol className="list-decimal py-6 px-12 space-y-5  font-['RethinkSans-SemiBold'] font-semibold text-[16px] leading-[24px] text-justify text-[#8F8F8F]">
                    {allScrollItems.map((item, idx) => (
                      <li key={idx} className="min-w-fit ">
                        <h5 className="text-[#8F8F8F] font-['RethinkSans-SemiBold'] font-semibold text-[16px] lg:text-[18px] leading-[26px]">
                          {item.number}
                        </h5>
                        <p className="text-xs font-['RethinkSans-SemiBold'] font-semibold text-[#666]">
                          {item.service}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="  w-full lg:hidden justify-center px-4 ">
              <img src={HeroBg} alt="Winning" className="w-full h-full " />
            </div>
          </div>

          <Footer />
          <Socials />
        </div>
      </div>
    </>
  );
};

export default WinningNumbersPage;
