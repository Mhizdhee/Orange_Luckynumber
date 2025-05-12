import React, { useState } from "react";
import OrangeLogo from "../assets/Images/Orange_logo.png";
import LuckyLogo from "../assets/Images/luckynumberlogo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import ContactModal from "../Components/ContactModal";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <nav
        className=" lg:bg-[--bg-radial-gradient]  py-3 px-4 lg:px-30   flex justify-between items-center fixed top-0 left-0 right-0 z-10 "
        style={{
          background: "var(--bg-radial-gradient)",
        }}
      >
        <div className="flex items-center  ">
          <img
            src={OrangeLogo}
            alt="logo"
            className="border-r border-r-[#8F8F8F] pr-3 h-8"
          />
          <img src={LuckyLogo} alt="luckylogo" className="pl-3 h-8" />
        </div>

        <div className="hidden lg:flex items-center justify-center  gap-31 ">
          <ul className="flex items-center gap-10 cursor-pointer">
            <li>
              <Link
                to="how-to-play"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-[#8F8F8F] hover:text-[#FFFFFF] text-[14px] font-[Inter] font-normal leading-[22px] "
              >
                Comment jouer
              </Link>
            </li>

            <li>
              <Link
                to="faq"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-[#8F8F8F] hover:text-[#FFFFFF] text-[14px] font-[Inter] font-normal leading-[22px]"
              >
                Foire aux questions
              </Link>
            </li>
          </ul>

          <ul className="flex items-center gap-10 cursor-pointer">
            <li>
              <Link
                to="testimonial"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-[#8F8F8F] hover:text-[#FFFFFF] text-[14px] font-[Inter] font-normal leading-[22px]"
              >
                Témoignages
              </Link>
            </li>

            <li>
              <Link
                to="#contact-us"
                onClick={() => setIsContactOpen(true)}
                className="text-[#8F8F8F] hover:text-[#FFFFFF] text-[14px] font-[Inter] font-normal leading-[22px]"
              >
                Contactez-nous
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="text-[#8F8F8F] h-6 w-6" />
            ) : (
              <Menu className="text-[#8F8F8F] h-6 w-6" />
            )}
          </button>
        </div>
        {/* Mobile Sidebar Menu */}
        <div
          className={`fixed top-[56px] left-0  w-full h-[328px]  bg-[#101010] px-4 pt-10 pb-16 z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <ul className="space-y-8 text-left">
            <li>
              <Link
                to="how-to-play"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-[#8F8F8F] hover:text-[#FFFFFF] font-['RethinkSans-Bold'] text-[24px] font-bold leading-[32px] "
                onClick={() => setIsMenuOpen(false)}
              >
                Comment jouer
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-[#8F8F8F] hover:text-[#FFFFFF] font-['RethinkSans-Bold'] text-[24px] font-bold leading-[32px] "
                onClick={() => setIsMenuOpen(false)}
              >
                Foire aux questions
              </Link>
            </li>
            <li>
              <Link
                to="testimonial"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-[#8F8F8F] hover:text-[#FFFFFF] font-['RethinkSans-Bold'] text-[24px] font-bold leading-[32px] "
                onClick={() => setIsMenuOpen(false)}
              >
                Témoignages
              </Link>
            </li>
            <li>
              <Link
                to="#contact-us"
                onClick={() => setIsContactOpen(true)}
                className="text-[#8F8F8F] hover:text-[#FFFFFF] font-['RethinkSans-Bold'] text-[24px] font-bold leading-[32px] "
              >
                Contactez-nous
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};

export default Navbar;
