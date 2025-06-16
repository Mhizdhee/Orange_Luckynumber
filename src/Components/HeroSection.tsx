import React, { useState, useEffect } from "react";
import HeroBg from "../assets/Images/heroimg.png";
import Background from "../assets/Images/Background-img.png";
import MobileBackground from "../assets/Images/mobilebg-img .png";
import NumberImg from "../assets/Images/BackgroundDis.png";
import { motion } from "framer-motion";
import WinningNumbersSection from "./WinninNumbersSection";
import { useWinner } from "../Context/WinnerContext";
import SubscribeModal from "../Components/SubscribeModal";

const HeroSection: React.FC = () => {
  const { data, isLoading } = useWinner();
  const [, setIsAnimating] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState<string[]>(
    Array(10).fill("0")
  );
  const [msisdn, setMsisdn] = useState("");

  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

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

    const results = data?.results?.[0]?.drawResults;
    if (!Array.isArray(results)) {
      console.warn("No draw results available");
      return;
    }

    // Only consider Orange services
    const orangeServices = [
      "Lucky Number MAX",
      "Lucky Number Eco",
      "Lucky Number Premium",
      "IC Orange Lucky Number Eco",
    ];
    const orangeResult = results.find((result) =>
      orangeServices.includes(result.serviceName)
    );

    if (!orangeResult || !orangeResult.winningNumber) {
      const fallbackNumber = ["0", "7", "X", "X", "0", "0", "0", "0", "0", "0"];
      setAnimatedNumbers(fallbackNumber);
      setIsAnimating(true);
      return;
    }

    const formattedNumber = ("07" + orangeResult.winningNumber).split("");
    setTimeout(() => {
      setAnimatedNumbers(formattedNumber);
      setTimeout(() => setIsAnimating(true), 100);
    }, 600);
  }, [isLoading, data]);

  return (
    <>
      <div>
        <section
          className="hidden lg:block  lg:pt-30  relative lg:bg-cover lg:bg-center  lg:bg-no-repeat "
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="max-w-[1440px] lg:mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-14 ">
            <div className="w-full max-w-[600px] text-center lg:text-left  lg:pl-30 mt-12">
              <div className="w-[327px] flex flex-col items-center justify-center mx-auto  md:w-[584px] lg:mx-0">
                <h2 className="font-['RethinkSans-Bold'] text-[36px] lg:text-[42px]  xl:text-[52px]  lg:text- font-bold leading-[44px] lg:leading-[60px]  text-[#8F8F8F] mb-2">
                  Votre grande chance commence ici,
                  <span className="font-['RethinkSans-Bold'] text-[36px] lg:text-[42px]  xl:text-[52px]  lg:text- font-bold leading-[44px] lg:leading-[60px]  text-[#FFFFFF]">
                    Envoyez par SMS "NO3" au 7717
                  </span>
                </h2>
                <p className="text-[#8F8F8F] text-[16px] text-center lg:text-justify font-[Inter] font-normal leading-[24px] ">
                  Tentez votre chance et réaliser vos rêves : 1 000 000 FCFA
                  prix en espèces, gains instantanés un jackpot qui changent la
                  vie.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <div className="relative w-full max-w-md ">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#101010] text-[16px] font-[Inter] font-normal leading-[24px]  border-r border-r-[#EEEEEE] pr-3">
                    +225
                  </span>
                  <input
                    type="tel"
                    placeholder="0723456789"
                    value={msisdn}
                    onChange={(e) => setMsisdn(e.target.value)}
                    className="hidden lg:flex bg-[#FFFFFF] py-[10px] text-[16px] font-[Inter] font-normal leading-[24px]  placeholder:text-[#CCCCCC] pl-17 pr-4 outline-none w-full"
                  />
                </div>
                <button
                  onClick={() => {
                    if (msisdn.trim() === "") {
                      setMessage("Veuillez entrer un numéro.");
                      setTimeout(() => {
                        setMessage("");
                      }, 1000);

                      return;
                    }
                    setIsModalOpen(true);
                  }}
                  className="w-[327px] mx-auto md:mx-auto lg:mx-0 md:w-[70%] lg:w-1/2 bg-[#FF7900] hover:bg-[#101010] py-[10px] px-4 text-[#101010] hover:text-[#FFF] text-[16px] font-[Inter] font-medium leading-[24px] cursor-pointer"
                >
                  S'abonner
                </button>
                {message && (
                  <p className="mt-4 text-sm text-white whitespace-nowrap">
                    {message}
                  </p>
                )}
                {isModalOpen && (
                  <SubscribeModal
                    msisdn={msisdn}
                    onClose={() => setIsModalOpen(false)}
                  />
                )}
              </div>
              <div className="bg-[#242424] my-16 rounded-t-[24px]  rounded-b-[40px] w-[343px] h-[200px] md:w-[466px] md:h-[212px] p-4">
                <div
                  className="bg-[#3F3F3F] flex items-center justify-between text-[#FFFFFF] text-center rounded-[12px] border py-2 px-4 border-[var( --border-gradient)]"
                  style={{
                    border: "1px solid transparent",
                    borderImage: "var(--border-gradient)",
                  }}
                >
                  <div className="w-2 h-2 bg-[#8F8F8F] rounded-full"></div>
                  <p className="text-[16px] font-[Inter] font-normal leading-[24px]">
                    Numéro d’Or du jour
                  </p>
                  <div className="w-2 h-2 bg-[#8F8F8F] rounded-full"></div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-3">
                  <div className="relative w-[72px] h-[104px] lg:w-[434px] lg:h-[116px]">
                    <img
                      src={NumberImg}
                      alt="number-bg"
                      className="w-full h-full object-fit"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {animatedNumbers.map((num, index) =>
                        num === "x" || num === "X" ? (
                          <div
                            key={index}
                            className="flex items-center justify-center bg-gradient-to-b from-white to-[#999999] text-transparent bg-clip-text font-bold font-[Inter] text-[44px] leading-[44px] w-[40px] h-[60px]"
                          >
                            X
                          </div>
                        ) : (
                          <div
                            key={index}
                            className="relative w-[40px] h-[60px] overflow-hidden"
                          >
                            <motion.div
                              initial={{ y: 0 }}
                              animate={{ y: `-${Number(num) * 60}px` }}
                              transition={{ duration: 1.2, ease: "easeOut" }}
                            >
                              {[...Array(10)].map((_, i) => (
                                <div
                                  key={i}
                                  className="h-[60px] flex items-center justify-center bg-gradient-to-b from-white to-[#999999] text-transparent bg-clip-text font-bold font-[Inter] text-[44px] leading-[44px]"
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
            <div className=" mt-12 lg:mt-0 w-full lg:flex justify-center lg:justify-end px-4 lg:px-0">
              <img
                src={HeroBg}
                alt="heroimg"
                className="w-full max-w-[375px] sm:max-w-[400px] lg:max-w-[450px] xl:max-w-[680px]"
              />
            </div>
          </div>
        </section>

        <section
          className="block lg:hidden pt-18 bg-cover bg-center bg-no-repeat  relative  "
          style={{ backgroundImage: `url(${MobileBackground})` }}
        >
          <div className="max-w-[1440px] lg:mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-14 ">
            <div className="w-full max-w-[600px] text-center lg:text-left  lg:pl-30 mt-12">
              <div className="w-[327px] flex flex-col items-center justify-center mx-auto  md:w-[584px] lg:mx-0">
                <h2 className="font-['RethinkSans-Bold'] text-[36px] lg:text-[42px]  xl:text-[52px]  lg:text- font-bold leading-[44px] lg:leading-[60px]  text-[#8F8F8F] mb-2">
                  Votre grande chance commence ici,
                  <span className="font-['RethinkSans-Bold'] text-[36px] lg:text-[42px]  xl:text-[52px]  lg:text- font-bold leading-[44px] lg:leading-[60px]  text-[#FFFFFF]">
                    Envoyez par SMS "NO3" au 7717
                  </span>
                </h2>
                <p className="text-[#8F8F8F] text-[16px] text-center lg:text-justify font-[Inter] font-normal leading-[24px] ">
                  Tentez votre chance et réaliser vos rêves : 1 000 000 FCFA
                  prix en espèces, gains instantanés un jackpot qui changent la
                  vie.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <button
                  onClick={() => setIsSubscribeModalOpen(true)}
                  className="w-[327px] mx-auto md:mx-auto lg:mx-0 md:w-[70%] lg:w-1/2 bg-[#FF7900] hover:bg-[#101010] py-[10px] px-4 text-[#101010] hover:text-[#FFFFFF] text-[16px] font-[Inter] font-medium leading-[24px]"
                >
                  S'abonner
                </button>
              </div>
              <div className="bg-[#242424] mt-16 rounded-t-[24px] mx-auto rounded-b-[40px] w-[343px] h-[200px] md:w-[388px] md:h-[212px] p-4">
                <div
                  className="bg-[#3F3F3F] flex items-center justify-between text-[#FFFFFF] text-center rounded-[12px] border py-2 px-4 border-[var( --border-gradient)]"
                  style={{
                    border: "1px solid transparent",
                    borderImage: "var(--border-gradient)",
                  }}
                >
                  <div className="w-2 h-2 bg-[#8F8F8F] rounded-full"></div>
                  <p className="text-[16px] font-[Inter] font-normal leading-[24px]">
                    Numéro d’Or du jour
                  </p>
                  <div className="w-2 h-2 bg-[#8F8F8F] rounded-full"></div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-3">
                  <div className="relative w-[311px] h-[80px] lg:w-[434px] lg:h-[116px]">
                    <img
                      src={NumberImg}
                      alt="number-bg"
                      className="w-full h-full object-fit"
                    />
                    <div className="absolute inset-0 flex items-center justify-center px-6">
                      {animatedNumbers.map((num, index) =>
                        num === "x" || num === "X" ? (
                          <div
                            key={index}
                            className=" flex items-center justify-center bg-gradient-to-b from-white to-[#999999] text-transparent bg-clip-text font-bold font-[Inter] text-[35px] leading-[35px] lg:text-[44px] lg:leading-[44px] "
                          >
                            X
                          </div>
                        ) : (
                          <div
                            key={index}
                            className="relative w-[40px] h-[60px] overflow-hidden"
                          >
                            <motion.div
                              initial={{ y: 0 }}
                              animate={{ y: `-${Number(num) * 60}px` }}
                              transition={{ duration: 1.2, ease: "easeOut" }}
                            >
                              {[...Array(10)].map((_, i) => (
                                <div
                                  key={i}
                                  className="h-[60px] flex items-center justify-center bg-gradient-to-b from-white to-[#999999] text-transparent bg-clip-text font-bold font-[Inter] text-[35px] leading-[35px] lg:text-[44px] lg:leading-[44px]"
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
            <div className=" mt-12 lg:mt-0 w-full lg:flex justify-center lg:justify-end px-4 lg:px-0">
              <img
                src={HeroBg}
                alt="heroimg"
                className="w-full max-w-[375px] mx-auto sm:max-w-[400px] lg:max-w-[450px] xl:max-w-[680px]"
              />
            </div>
          </div>
        </section>
        <WinningNumbersSection />
        {isSubscribeModalOpen && (
          <div className="lg:hidden  fixed inset-0 bg-[#8F8F8F01] bg-opacity-60 z-50 flex items-center justify-center">
            <div className="bg-[#FFFFFF] p-6 mx-4 rounded-lg w-full max-w-md relative">
              <button
                onClick={() => setIsSubscribeModalOpen(false)}
                className="absolute top-2 right-3 text-xl leading-[22px] font-bold font-[Inter]"
              >
                ×
              </button>
              <h2 className="text-[24px] leading-[32px] text-center font-bold font-['RethinkSans-Bold'] my-4 text-[#101010]">
                Comment s'abonner ?
              </h2>
              <p className="mb-4 text-center text-[16px] text-[#8F8F8F] font-normal font-[Inter] leading-[24px]">
                Choisissez un pack pour envoyer un mot-clé au 7717
              </p>

              <div className="space-y-3">
                <a
                  href="sms:7717?&body=NO1"
                  className="block bg-[#FF7900]  px-4 py-3.5  text-center"
                >
                  <span className="text-[#101010]  text-[16px] font-[Inter] font-medium leading-[24px] ">
                    "NO1" - Pack 50F
                  </span>
                </a>
                <a
                  href="sms:7717?&body=NO2"
                  className="block bg-[#FF7900]  px-4 py-3.5  text-center"
                >
                  <span className="text-[#101010]  text-[16px] font-[Inter] font-medium leading-[24px] ">
                    "NO2" - Pack 100F
                  </span>
                </a>
                <a
                  href="sms:7717?&body=NO3"
                  className="block bg-[#FF7900]  px-4 py-3.5  text-center"
                >
                  <span className="text-[#101010]  text-[16px] font-[Inter] font-medium leading-[24px] ">
                    "NO3" - Pack 250F
                  </span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default HeroSection;
