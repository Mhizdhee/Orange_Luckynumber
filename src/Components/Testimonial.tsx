import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Logo from "../assets/Images/testimonial.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ThumbnailImage from "../assets/Images/Image.png";
import Play from "../assets/Icons/play.png";

const Testimonial: React.FC = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  useEffect(() => {
    setNavigationReady(true);
  }, []);

  const handlePlay = (index: number) => {
    if (playingIndex !== null && videoRefs.current[playingIndex]) {
      videoRefs.current[playingIndex].pause();
    }

    setPlayingIndex(index);
  };

  const handleSlideChange = () => {
    if (playingIndex !== null && videoRefs.current[playingIndex]) {
      videoRefs.current[playingIndex].pause();
      setPlayingIndex(null);
    }
  };

  return (
    <>
      <section
        id="testimonial"
        className="px-4 lg:px-28 py-18 bg-[#FFFFFF] text-[#101010]"
      >
        {/* Headings */}
        <div className="text-center mb-12">
          <h2 className="font-['RethinkSans-Bold'] font-bold text-[28px] lg:text-[44px] leading-[36px] text-center lg:leading-[52px] mb-4">
            Ils ont joué. <br className="block lg:hidden" /> Ils ont gagné.
          </h2>
          <p className="font-[Inter] font-normal leading-[24px] text-[#8F8F8F] max-w-[720px] mx-auto text-[16px] ">
            Tout a commencé par un simple SMS. Maintenant, ils célèbrent des
            gains, grands et petits. Découvrez comment Luckynumber transforme
            des vies partout au pays.
          </p>
        </div>

        {/* Swiper Section */}
        <div className="relative">
          {navigationReady && (
            <Swiper
              modules={[Pagination, Navigation]}
              // spaceBetween={}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{
                clickable: true,
                el: ".custom-swiper-pagination",
              }}
              onSlideChange={handleSlideChange}
            >
              {/* Testimonial Slide */}

              <SwiperSlide>
                <div className="flex flex-col  lg:flex-row  w-full items-stretch gap-4 lg:gap-4">
                  <div className="w-full lg:w-1/2 h-[333px] bg-[#FF7900]  py-6 px-4 lg:py-8  lg:pl-10 lg:pr-12 flex flex-col justify-between">
                    <p className=" font-[Inter] font-normal leading-[26px] md:leading-[28px] text-[18px] md:text-[20px] text-[#101010]">
                      Ce contenu est un exemple utilisé comme espace réservé. Il
                      aide à démontrer la mise en page et le design d'une page
                      avant que le texte réel ne soit disponible. Remplacez-le
                      par du contenu réel une fois prêt.
                    </p>
                    <div className="flex items-center gap-2 lg:gap-4 mt-5 lg:mt-2">
                      <img
                        src={Logo}
                        alt="Geraldine"
                        className="w-20 h-20 rounded-[100px] border-4  border-[#EC7000] object-cover"
                      />
                      <span className="font-semibold font-['RethinkSans-Bold'] text-[20px] lg:text-[24px] leading-[28px] lg:leading-[40px] text-[#101010]">
                        Geraldine
                      </span>
                    </div>
                  </div>

                  {/* video */}
                  <div className="relative w-full lg:w-1/2 h-[333px]">
                    {/* {isPlaying ? ( */}
                    {playingIndex === 0 ? (
                      <video
                        // ref={videoRef}
                        ref={(el) => {
                          videoRefs.current[0] = el;
                        }}
                        controls
                        autoPlay
                        className="w-full h-full object-cover "
                        src="https://luckynumberng.com/Videos/VID-20200502-WA0017.mp4"
                      />
                    ) : (
                      <div
                        className="relative w-full h-full cursor-pointer"
                        // onClick={handlePlay}
                        onClick={() => handlePlay(0)}
                      >
                        <img
                          src={ThumbnailImage}
                          alt="Video thumbnail"
                          className="w-full h-full object-cover "
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 ">
                          <div className="w-9 h-9 bg-[#FFFFFF66] rounded-full flex items-center justify-center">
                            <img src={Play} alt="play" className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col  lg:flex-row  w-full items-stretch gap-4 lg:gap-4">
                  <div className="w-full lg:w-1/2 h-[333px] bg-[#FF7900]  py-6 px-4 lg:py-8  lg:pl-10 lg:pr-12 flex flex-col justify-between">
                    <p className=" font-[Inter] font-normal leading-[26px] md:leading-[28px] text-[18px] md:text-[20px] text-[#101010]">
                      Ce contenu est un exemple utilisé comme espace réservé. Il
                      aide à démontrer la mise en page et le design d'une page
                      avant que le texte réel ne soit disponible. Remplacez-le
                      par du contenu réel une fois prêt.
                    </p>
                    <div className="flex items-center gap-2 lg:gap-4 mt-5 lg:mt-2">
                      <img
                        src={Logo}
                        alt="Geraldine"
                        className="w-20 h-20 rounded-[100px] border-4  border-[#EC7000] object-cover"
                      />
                      <span className="font-semibold font-['RethinkSans-Bold'] text-[20px] lg:text-[24px] leading-[28px] lg:leading-[40px] text-[#101010]">
                        Geraldine
                      </span>
                    </div>
                  </div>

                  {/* Video */}

                  <div className="relative w-full lg:w-1/2 h-[333px]">
                    {playingIndex === 1 ? (
                      <video
                        ref={(el) => {
                          videoRefs.current[1] = el;
                        }}
                        controls
                        autoPlay
                        className="w-full h-full object-cover "
                        src="https://luckynumberng.com/Videos/VID-20200426-WA0008.mp4"
                      />
                    ) : (
                      <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => handlePlay(1)}
                      >
                        <img
                          src={ThumbnailImage}
                          alt="Video thumbnail"
                          className="w-full h-full object-cover "
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 ">
                          <div className="w-9 h-9 bg-[#FFFFFF66] rounded-full flex items-center justify-center">
                            <img src={Play} alt="play" className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          )}
          {/*  Nav & Pagination */}
          <div className="mt-12 flex  items-center justify-center ">
            <div className=" flex items-center gap-6">
              <div
                ref={prevRef}
                className="text-xl flex items-center justify-center bg-[#EEEEEE] text-[#101010] rounded-[24px] p-2 hover:bg-[#FF7900] cursor-pointer"
              >
                <ChevronLeft />
              </div>

              <div className="custom-swiper-pagination flex justify-center gap-2 bg-[#EEEEEE]  rounded-[24px] py-3 px-4 cursor-pointer"></div>

              <div
                ref={nextRef}
                className="text-xl flex items-center justify-center bg-[#EEEEEE] text-[#101010] rounded-[24px] p-2 hover:bg-[#FF7900] cursor-pointer"
              >
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
