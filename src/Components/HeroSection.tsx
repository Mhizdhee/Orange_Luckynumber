import React, { useState, useEffect } from "react";
import HeroBg from "../assets/Images/heroimg.png";
import Background from "../assets/Images/Background-img.png";
import MobileBackground from "../assets/Images/mobilebg-img .png";
import NumberImg from "../assets/Images/Background.png";

const HeroSection: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [animatedNumbers, setAnimatedNumbers] = useState<number[]>([
    0, 0, 0, 0,
  ]);

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
      <div>
        <section
          className="hidden lg:block  lg:pt-30 relative lg:bg-cover lg:bg-center  lg:bg-no-repeat "
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="max-w-[1440px] lg:mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-14 ">
            {/* <div className=" lg:w-[584px]  lg:h-[236px] lg:pl-30"> */}
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
                    +237
                  </span>
                  <input
                    type="tel"
                    placeholder="0123456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="hidden lg:flex bg-[#FFFFFF] py-[10px] text-[16px] font-[Inter] font-normal leading-[24px]  placeholder:text-[#CCCCCC] pl-17 pr-4 outline-none w-full"
                  />
                </div>
                <button className="w-[327px] mx-auto md:mx-auto lg:mx-0 md:w-[70%] lg:w-1/2 bg-[#FF7900] hover:bg-[#101010] py-[10px] px-4 text-[#101010] hover:text-[#FFF] text-[16px] font-[Inter] font-medium leading-[24px] cursor-pointer">
                  S'abonner
                </button>
              </div>
              <div className="bg-[#242424] mt-16 rounded-t-[24px]  rounded-b-[40px] w-[343px] h-[200px] md:w-[388px] md:h-[212px] p-4">
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
                  {animatedNumbers.map((num, index) => (
                    <div
                      key={index}
                      className="relative w-[72px] h-[104px] lg:w-[80px] lg:h-[116px]"
                    >
                      <img
                        src={NumberImg}
                        alt={`number-${num}`}
                        className="w-full h-full"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-white to-[#999999] text-transparent bg-clip-text font-bold font-[Inter] leading-[48px] text-[40px]">
                        {num}
                      </span>
                    </div>
                  ))}
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
            {/* <div className=" lg:w-[584px]  lg:h-[236px] lg:pl-30"> */}
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
                <input
                  type="text"
                  placeholder="0123456789"
                  className="hidden lg:flex bg-[#FFFFFF] py-[10px] px-4 outline-none w-full"
                />

                <button className="w-[327px] mx-auto md:mx-auto lg:mx-0 md:w-[70%] lg:w-1/2 bg-[#FF7900] hover:bg-[#101010] py-[10px] px-4 text-[#101010] hover:text-[#FFFFFF] text-[16px] font-[Inter] font-medium leading-[24px]">
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
                  {animatedNumbers.map((num, index) => (
                    <div
                      key={index}
                      className="relative w-[72px] h-[104px] lg:w-[80px] lg:h-[116px]"
                    >
                      <img
                        src={NumberImg}
                        alt={`number-${num}`}
                        className="w-full h-full"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-white to-[#999999] text-transparent bg-clip-text font-bold font-[Inter] leading-[48px] text-[40px]">
                        {num}
                      </span>
                    </div>
                  ))}
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
      </div>
    </>
  );
};

export default HeroSection;
