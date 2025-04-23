import React from "react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#10101090] bg-opacity-50 z-70 flex items-center justify-center">
      <div className="bg-white px-4 pt-4 pb-6 mx-2 md:px-6 md:pt-6 md:pb-10  w-full max-w-lg relative">
        <button
          className="absolute top-3 right-3 text-[#1C1C1C] text-2xl cursor-pointer font-normal"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="font-['RethinkSans-Bold'] font-bold leading-[32px] text-[#101010] text-[24px] lg:text-[28px] lg:leading-[36px] my-6">
          Contactez-nous
        </h2>

        <form className="space-y-4">
          <div className="lg:flex lg:gap-6 lg:items-center w-full">
            <div className="mb-4 lg:mb-0">
              <label className="block font-[Inter] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#101010] font-medium mb-[6px]">
                Nom*
              </label>
              <input
                type="text"
                className="w-full border border-[#E0E0E0] font-[Inter] font-normal text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] placeholder:text-[#CCCCCC] outline-none  px-4 py-[10px]"
                placeholder=" Nom"
              />
            </div>

            <div>
              <label className="block font-[Inter] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#101010] font-medium mb-[6px]">
                Adresse e-mail*
              </label>
              <input
                type="text"
                className="w-full border border-[#E0E0E0] font-[Inter] font-normal text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] placeholder:text-[#CCCCCC] outline-none  px-4 py-[10px]"
                placeholder="Adresse e-mail"
              />
            </div>
          </div>
          <div>
            <label className="block font-[Inter] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#101010] font-medium mb-[6px]">
              Site web
            </label>
            <input
              type="text"
              className="w-full border border-[#E0E0E0] font-[Inter] font-normal text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] placeholder:text-[#CCCCCC] outline-none  px-4 py-[10px]"
              placeholder="Site web"
            />
          </div>

          <div>
            <label className="block font-[Inter] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#101010] font-medium mb-[6px]">
              Message*
            </label>
            <textarea
              className="w-full border border-[#E0E0E0] font-[Inter] font-normal text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] placeholder:text-[#CCCCCC] outline-none  px-4 py-[10px]"
              rows={4}
              placeholder="Écrivez quelque chose...."
            ></textarea>
          </div>

          <p className="font-[Inter] font-medium text-[14px] leading-[22px] text-[#8F8F8F] ">
            Champs obligatoires*
          </p>

          <button
            type="submit"
            className="mt-4 w-full bg-[#FF7900] hover:bg-[#101010] font-[Inter] font-medium text-[16px] leading-[24px] text-[#101010] px-4 py-[10px] rounded-md hover:text-[#ffffff] transition cursor-pointer"
          >
            Envoyez un message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
