// import React, { useState, useEffect } from "react";
// import HeroBg from "../assets/Images/heroimg.png";
// import Background from "../assets/Images/Background-img.png";
// import MobileBackground from "../assets/Images/mobilebg-img .png";
// import NumberImg from "../assets/Images/BackgroundDis.png";
// import { motion } from "framer-motion";
// import WinningNumbersSection from "./WinninNumbersSection";
// import { useWinner } from "../Context/WinnerContext";

// const HeroSection: React.FC = () => {
//   const [phone, setPhone] = useState("");
//   const { data, isLoading } = useWinner();
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [animatedNumbers, setAnimatedNumbers] = useState<string[]>(
//     Array(10).fill("0")
//   );

//   console.log(isAnimating);
//   useEffect(() => {
//     if (!isLoading) return;

//     const animationInterval = setInterval(() => {
//       const randomDigits = Array.from({ length: 6 }, () =>
//         Math.floor(Math.random() * 10).toString()
//       );
//       const randomNumber = ["0", "7", "X", "X", ...randomDigits];
//       setAnimatedNumbers(randomNumber);
//     }, 100);

//     return () => clearInterval(animationInterval);
//   }, [isLoading]);

//   useEffect(() => {
//     if (isLoading || !data) return;

//     // const services = [
//     //   "Lucky Number MAX",
//     //   "Lucky Number Eco",
//     //   "Lucky Number Premium",
//     // ];

//     const luckyNumberMax = data?.results[0]?.drawResults?.find(
//       (result) => result.serviceName === "Lucky Number MAX"
//     );

//     if (!luckyNumberMax || !luckyNumberMax.winningNumber) {
//       const fallbackNumber = ["0", "7", "X", "X", "0", "0", "0", "0", "0", "0"];
//       setAnimatedNumbers(fallbackNumber);
//       setIsAnimating(true);
//       return;
//     }

//     const formattedNumber = ("07" + luckyNumberMax.winningNumber).split("");
//     setTimeout(() => {
//       setAnimatedNumbers(formattedNumber);
//       setTimeout(() => setIsAnimating(true), 100);
//     }, 600);
//   }, [isLoading, data]);

//   return (
//     <>
//       <div>
//         <section
//           className="hidden lg:block  lg:pt-30  relative lg:bg-cover lg:bg-center  lg:bg-no-repeat "
//           style={{ backgroundImage: `url(${Background})` }}
//         >
//           <div className="max-w-[1440px] lg:mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-14 ">
//             <div className="w-full max-w-[600px] text-center lg:text-left  lg:pl-30 mt-12">
//               <div className="w-[327px] flex flex-col items-center justify-center mx-auto  md:w-[584px] lg:mx-0">
//                 <h2 className="font-['RethinkSans-Bold'] text-[36px] lg:text-[42px]  xl:text-[52px]  lg:text- font-bold leading-[44px] lg:leading-[60px]  text-[#8F8F8F] mb-2">
//                   Votre grande chance commence ici,
//                   <span className="font-['RethinkSans-Bold'] text-[36px] lg:text-[42px]  xl:text-[52px]  lg:text- font-bold leading-[44px] lg:leading-[60px]  text-[#FFFFFF]">
//                     Envoyez par SMS "NO3" au 7717
//                   </span>
//                 </h2>
//                 <p className="text-[#8F8F8F] text-[16px] text-center lg:text-justify font-[Inter] font-normal leading-[24px] ">
//                   Tentez votre chance et réaliser vos rêves : 1 000 000 FCFA
//                   prix en espèces, gains instantanés un jackpot qui changent la
//                   vie.
//                 </p>
//               </div>
//               <div className="mt-8 flex items-center gap-2">
//                 <div className="relative w-full max-w-md ">
//                   <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#101010] text-[16px] font-[Inter] font-normal leading-[24px]  border-r border-r-[#EEEEEE] pr-3">
//                     +225
//                   </span>
//                   <input
//                     type="tel"
//                     placeholder="0723456789"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     className="hidden lg:flex bg-[#FFFFFF] py-[10px] text-[16px] font-[Inter] font-normal leading-[24px]  placeholder:text-[#CCCCCC] pl-17 pr-4 outline-none w-full"
//                   />
//                 </div>
//                 <button className="w-[327px] mx-auto md:mx-auto lg:mx-0 md:w-[70%] lg:w-1/2 bg-[#FF7900] hover:bg-[#101010] py-[10px] px-4 text-[#101010] hover:text-[#FFF] text-[16px] font-[Inter] font-medium leading-[24px] cursor-pointer">
//                   S'abonner
//                 </button>
//               </div>
//               <div className="bg-[#242424] my-16 rounded-t-[24px]  rounded-b-[40px] w-[343px] h-[200px] md:w-[466px] md:h-[212px] p-4">
//                 <div
//                   className="bg-[#3F3F3F] flex items-center justify-between text-[#FFFFFF] text-center rounded-[12px] border py-2 px-4 border-[var( --border-gradient)]"
//                   style={{
//                     border: "1px solid transparent",
//                     borderImage: "var(--border-gradient)",
//                   }}
//                 >
//                   <div className="w-2 h-2 bg-[#8F8F8F] rounded-full"></div>
//                   <p className="text-[16px] font-[Inter] font-normal leading-[24px]">
//                     Numéro d’Or du jour
//                   </p>
//                   <div className="w-2 h-2 bg-[#8F8F8F] rounded-full"></div>
//                 </div>

//                 <div className="mt-6 flex items-center justify-center gap-3">
//                   <div className="relative w-[72px] h-[104px] lg:w-[434px] lg:h-[116px]">
//                     <img
//                       src={NumberImg}
//                       alt="number-bg"
//                       className="w-full h-full object-fit"
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       {animatedNumbers.map((num, index) =>
//                         num === "x" || num === "X" ? (
//                           <div
//                             key={index}
//                             className="flex items-center justify-center bg-gradient-to-b from-white to-[#999999] text-transparent bg-clip-text font-bold font-[Inter] text-[44px] leading-[44px] w-[40px] h-[60px]"
//                           >
//                             X
//                           </div>
//                         ) : (
//                           <div
//                             key={index}
//                             className="relative w-[40px] h-[60px] overflow-hidden"
//                           >
//                             <motion.div
//                               initial={{ y: 0 }}
//                               animate={{ y: `-${Number(num) * 60}px` }}
//                               transition={{ duration: 1.2, ease: "easeOut" }}
//                             >
//                               {[...Array(10)].map((_, i) => (
//                                 <div
//                                   key={i}
//                                   className="h-[60px] flex items-center justify-center bg-gradient-to-b from-white to-[#999999] text-transparent bg-clip-text font-bold font-[Inter] text-[44px] leading-[44px]"
//                                 >
//                                   {i}
//                                 </div>
//                               ))}
//                             </motion.div>
//                           </div>
//                         )
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className=" mt-12 lg:mt-0 w-full lg:flex justify-center lg:justify-end px-4 lg:px-0">
//               <img
//                 src={HeroBg}
//                 alt="heroimg"
//                 className="w-full max-w-[375px] sm:max-w-[400px] lg:max-w-[450px] xl:max-w-[680px]"
//               />
//             </div>
//           </div>
//         </section>

//         <section
//           className="block lg:hidden pt-18 bg-cover bg-center bg-no-repeat  relative  "
//           style={{ backgroundImage: `url(${MobileBackground})` }}
//         >
//           <div className="max-w-[1440px] lg:mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-14 ">
//             {/* <div className=" lg:w-[584px]  lg:h-[236px] lg:pl-30"> */}
//             <div className="w-full max-w-[600px] text-center lg:text-left  lg:pl-30 mt-12">
//               <div className="w-[327px] flex flex-col items-center justify-center mx-auto  md:w-[584px] lg:mx-0">
//                 <h2 className="font-['RethinkSans-Bold'] text-[36px] lg:text-[42px]  xl:text-[52px]  lg:text- font-bold leading-[44px] lg:leading-[60px]  text-[#8F8F8F] mb-2">
//                   Votre grande chance commence ici,
//                   <span className="font-['RethinkSans-Bold'] text-[36px] lg:text-[42px]  xl:text-[52px]  lg:text- font-bold leading-[44px] lg:leading-[60px]  text-[#FFFFFF]">
//                     Envoyez par SMS "NO3" au 7717
//                   </span>
//                 </h2>
//                 <p className="text-[#8F8F8F] text-[16px] text-center lg:text-justify font-[Inter] font-normal leading-[24px] ">
//                   Tentez votre chance et réaliser vos rêves : 1 000 000 FCFA
//                   prix en espèces, gains instantanés un jackpot qui changent la
//                   vie.
//                 </p>
//               </div>
//               <div className="mt-8 flex items-center gap-2">
//                 <input
//                   type="text"
//                   placeholder="0123456789"
//                   className="hidden lg:flex bg-[#FFFFFF] py-[10px] px-4 outline-none w-full"
//                 />

//                 <button className="w-[327px] mx-auto md:mx-auto lg:mx-0 md:w-[70%] lg:w-1/2 bg-[#FF7900] hover:bg-[#101010] py-[10px] px-4 text-[#101010] hover:text-[#FFFFFF] text-[16px] font-[Inter] font-medium leading-[24px]">
//                   S'abonner
//                 </button>
//               </div>
//               <div className="bg-[#242424] mt-16 rounded-t-[24px] mx-auto rounded-b-[40px] w-[343px] h-[200px] md:w-[388px] md:h-[212px] p-4">
//                 <div
//                   className="bg-[#3F3F3F] flex items-center justify-between text-[#FFFFFF] text-center rounded-[12px] border py-2 px-4 border-[var( --border-gradient)]"
//                   style={{
//                     border: "1px solid transparent",
//                     borderImage: "var(--border-gradient)",
//                   }}
//                 >
//                   <div className="w-2 h-2 bg-[#8F8F8F] rounded-full"></div>
//                   <p className="text-[16px] font-[Inter] font-normal leading-[24px]">
//                     Numéro d’Or du jour
//                   </p>
//                   <div className="w-2 h-2 bg-[#8F8F8F] rounded-full"></div>
//                 </div>

//                 <div className="mt-6 flex items-center justify-center gap-3">
//                   <div className="relative w-[311px] h-[80px] lg:w-[434px] lg:h-[116px]">
//                     <img
//                       src={NumberImg}
//                       alt="number-bg"
//                       className="w-full h-full object-fit"
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center px-6">
//                       {animatedNumbers.map((num, index) =>
//                         num === "x" || num === "X" ? (
//                           <div
//                             key={index}
//                             className=" flex items-center justify-center bg-gradient-to-b from-white to-[#999999] text-transparent bg-clip-text font-bold font-[Inter] text-[35px] leading-[35px] lg:text-[44px] lg:leading-[44px] "
//                           >
//                             X
//                           </div>
//                         ) : (
//                           <div
//                             key={index}
//                             className="relative w-[40px] h-[60px] overflow-hidden"
//                           >
//                             <motion.div
//                               initial={{ y: 0 }}
//                               animate={{ y: `-${Number(num) * 60}px` }}
//                               transition={{ duration: 1.2, ease: "easeOut" }}
//                             >
//                               {[...Array(10)].map((_, i) => (
//                                 <div
//                                   key={i}
//                                   className="h-[60px] flex items-center justify-center bg-gradient-to-b from-white to-[#999999] text-transparent bg-clip-text font-bold font-[Inter] text-[35px] leading-[35px] lg:text-[44px] lg:leading-[44px]"
//                                 >
//                                   {i}
//                                 </div>
//                               ))}
//                             </motion.div>
//                           </div>
//                         )
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className=" mt-12 lg:mt-0 w-full lg:flex justify-center lg:justify-end px-4 lg:px-0">
//               <img
//                 src={HeroBg}
//                 alt="heroimg"
//                 className="w-full max-w-[375px] mx-auto sm:max-w-[400px] lg:max-w-[450px] xl:max-w-[680px]"
//               />
//             </div>
//           </div>
//         </section>
//         <WinningNumbersSection />
//       </div>
//     </>
//   );
// };
// export default HeroSection;

import React, { useState, useEffect } from "react";
import HeroBg from "../assets/Images/heroimg.png";
import Background from "../assets/Images/Background-img.png";
import MobileBackground from "../assets/Images/mobilebg-img .png";
import NumberImg from "../assets/Images/BackgroundDis.png";
import { motion } from "framer-motion";
import WinningNumbersSection from "./WinninNumbersSection";
import { useWinner } from "../Context/WinnerContext";

const HeroSection: React.FC = () => {
  const [phone, setPhone] = useState("");
  const { data, isLoading } = useWinner();
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState<string[]>(
    Array(10).fill("0")
  );

  console.log(isAnimating);
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

  // useEffect(() => {
  //   if (isLoading || !data) return;

  //   // const services = [
  //   //   "Lucky Number MAX",
  //   //   "Lucky Number Eco",
  //   //   "Lucky Number Premium",
  //   // ];

  //   const luckyNumberMax = data?.results[0]?.drawResults?.find(
  //     (result) => result.serviceName === "Lucky Number MAX"
  //   );

  //   if (!luckyNumberMax || !luckyNumberMax.winningNumber) {
  //     const fallbackNumber = ["0", "7", "X", "X", "0", "0", "0", "0", "0", "0"];
  //     setAnimatedNumbers(fallbackNumber);
  //     setIsAnimating(true);
  //     return;
  //   }

  //   const formattedNumber = ("07" + luckyNumberMax.winningNumber).split("");
  //   setTimeout(() => {
  //     setAnimatedNumbers(formattedNumber);
  //     setTimeout(() => setIsAnimating(true), 100);
  //   }, 600);
  // }, [isLoading, data]);

  // useEffect(() => {
  //   if (isLoading) return;
  //   console.log("Raw API response:", data);
  //   const results = data?.results?.[0]?.drawResults;
  //   console.log("Extracted drawResults:", results);

  //   // const results = data?.results?.[0]?.drawResults;
  //   if (!Array.isArray(results) || results.length === 0) {
  //     console.warn("No draw results available");
  //     return;
  //   }

  //   const orangeServices = [
  //     "Lucky Number MAX",
  //     "Lucky Number Eco",
  //     "Lucky Number Premium",
  //   ];

  //   const selectedResult = results.find((r) =>
  //     orangeServices.includes(r.serviceName)
  //   );

  //   if (!selectedResult || !selectedResult.winningNumber) {
  //     const fallbackNumber = ["0", "7", "X", "X", "0", "0", "0", "0", "0", "0"];
  //     setAnimatedNumbers(fallbackNumber);
  //     setIsAnimating(true);
  //     return;
  //   }

  //   const formattedNumber = ("07" + selectedResult.winningNumber).split("");
  //   setTimeout(() => {
  //     setAnimatedNumbers(formattedNumber);
  //     setTimeout(() => setIsAnimating(true), 100);
  //   }, 600);
  // }, [isLoading, data]);

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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="hidden lg:flex bg-[#FFFFFF] py-[10px] text-[16px] font-[Inter] font-normal leading-[24px]  placeholder:text-[#CCCCCC] pl-17 pr-4 outline-none w-full"
                  />
                </div>
                <button className="w-[327px] mx-auto md:mx-auto lg:mx-0 md:w-[70%] lg:w-1/2 bg-[#FF7900] hover:bg-[#101010] py-[10px] px-4 text-[#101010] hover:text-[#FFF] text-[16px] font-[Inter] font-medium leading-[24px] cursor-pointer">
                  S'abonner
                </button>
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
      </div>
    </>
  );
};
export default HeroSection;
