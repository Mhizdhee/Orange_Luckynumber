import React, { useState } from "react";
import Location from "../assets/Icons/location.png";
import Contact from "../assets/Icons/call.png";
import Mail from "../assets/Icons/mail.png";
import Share from "../assets/Icons/share.png";
import { Link } from "react-scroll";
import OrangeLogo from "../assets/Images/Orange_logo.png";
import LuckyLogo from "../assets/Images/Lucky Number Logo.png";
import ContactModal from "../Components/ContactModal";

const Footer: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer
        id="contact-us"
        className="bg-[#101010] text-white px-4 lg:pl-30 lg:pr-58 py-12"
      >
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logos */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <img
                src={OrangeLogo}
                alt="Logo 1"
                className="border-r border-r-[#8F8F8F] pr-3 h-10"
              />
              <img src={LuckyLogo} alt="Logo 2" className="h-10" />
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex flex-col gap-6 w-full cursor-pointer">
                <Link
                  to="how-to-play"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="font-[Inter] font-normal text-[14px] whitespace-nowrap leading-[22px] text-[#8F8F8F] hover:text-[#FFFFFF]"
                >
                  Comment jouer
                </Link>

                <Link
                  // to="/Foire aux questions"
                  to="faq"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="font-[Inter] font-normal text-[14px] whitespace-nowrap leading-[22px] text-[#8F8F8F] hover:text-[#FFFFFF]"
                >
                  Foire aux questions
                </Link>
                <Link
                  to="testimonial"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="font-[Inter] font-normal text-[14px] whitespace-nowrap leading-[22px] text-[#8F8F8F] hover:text-[#FFFFFF]"
                >
                  Témoignages
                </Link>
              </div>

              <div className="flex flex-col gap-6 lg:ml-6 w-full">
                <Link
                  to="/Jouez de manière responsable"
                  className="font-[Inter] font-normal text-[14px] whitespace-nowrap leading-[22px] text-[#8F8F8F] hover:text-[#FFFFFF]"
                >
                  Jouez de manière responsable
                </Link>
                <Link
                  to="/Gains et paiements"
                  className="font-[Inter] font-normal text-[14px] whitespace-nowrap leading-[22px] text-[#8F8F8F] hover:text-[#FFFFFF]"
                >
                  Gains et paiements
                </Link>
                <Link
                  to="/Règlement du jeu"
                  className="font-[Inter] font-normal text-[14px] whitespace-nowrap leading-[22px] text-[#8F8F8F] hover:text-[#FFFFFF]"
                >
                  Règlement du jeu
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-6">
            <h4 className="font-['RethinkSans-Bold'] text-[24px] lg:text-[28px] font-bold leading-[32px] lg:leading-[36px] text-[#8F8F8F]">
              Contactez-nous
            </h4>
            <div className="flex items-start gap-2">
              <img src={Location} alt="location" />
              <p className="font-[Inter] font-normal text-[14px] leading-[22px] text-[#8F8F8F] hover:text-[#FFFFFF]">
                Votre adresse ici
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 w-full hover:text-[#FFFFFF]">
              <div className="flex items-center gap-2">
                <img src={Contact} alt="contact" />

                <p className="font-[Inter] font-normal text-[14px]  leading-[22px] text-[#8F8F8F] hover:text-[#FFFFFF]">
                  +2374446693434
                </p>
              </div>

              <div className="flex items-center gap-2">
                <img src={Mail} alt="mail" />

                <a
                  href="mailto:Orangeluckynumber@email.com"
                  className="font-[Inter] font-normal text-[14px] leading-[22px] text-[#8F8F8F] hover:text-[#FFFFFF]"
                >
                  Orangeluckynumber@email.com
                </a>
              </div>
            </div>
            <Link
              to="#contact-us"
              onClick={() => setIsContactOpen(true)}
              className="flex items-center gap-2"
            >
              <img src={Share} alt="share" />

              <p className="font-[Inter] font-normal text-[14px] leading-[22px] text-[#8F8F8F] hover:text-[#FFFFFF]">
                Envoyez un message
              </p>
            </Link>
          </div>
        </div>
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </footer>
    </>
  );
};
export default Footer;
