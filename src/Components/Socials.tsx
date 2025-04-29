import React from "react";
import Twitter from "../assets/Icons/twitter.png";
import Facebook from "../assets/Icons/facebook.png";
import Linkedn from "../assets/Icons/lnkedn.png";
import Instagram from "../assets/Icons/instagram.png";

const Socials: React.FC = () => {
  return (
    <>
      {/* Bottom Footer */}
      <div className="flex flex-col py-6 px-6 bg-[#242424] lg:flex-row lg:px-30  justify-between items-center gap-6">
        <div className="flex gap-6">
          <a href="#" rel="noopener noreferrer" className="hover:text-white">
            <img src={Twitter} alt="twitter" />
          </a>
          <a href="#" rel="noopener noreferrer" className="hover:text-white">
            <img src={Facebook} alt="facebook" />
          </a>
          <a href="#" rel="noopener noreferrer" className="hover:text-white">
            <img src={Linkedn} alt="linkedn" />
          </a>
          <a href="#" rel="noopener noreferrer" className="hover:text-white">
            <img src={Instagram} alt="instagram" className="hover:text-white" />
          </a>
        </div>
        <p className="font-[Inter] font-normal text-[14px] leading-[22px] text-[#8F8F8F] text-center lg:text-right">
          Copyright © Lucky Number 2025. <br className="block lg:hidden" /> Tous
          droits réservés.
        </p>
      </div>
    </>
  );
};

export default Socials;
