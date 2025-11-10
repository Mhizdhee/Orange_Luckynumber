import React, { useState } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  // const formRef = useRef<HTMLFormElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  enum WebsiteUrl {
    Orange_IC = "https://orglnic.ydaplatform.com/",
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const phoneNumber = formData.get("phoneNumber") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    setIsLoading(true);

    try {
      const response = await axios.post(
        // "https://api.ydplatform.com:5542/contact-us",
        // "https://84.200.73.130:5542/api/v1/ContactUs",
        "https://mtnghlnapi.ydaplatform.com/api/v1/ContactUs",

        {
          // const response = await axios.post("api/contact-us", {
          // await axios.post("api/contact-us", {
          phoneNumber,
          email,
          message,
          websiteUrl: WebsiteUrl.Orange_IC,
        }
      );

      setResponseMessage(response.data.message);
      setShowPopup(true);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      setResponseMessage("Failed to send message. Please try again.");
      setShowPopup(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#10101090] bg-opacity-50 z-70 flex items-center justify-center">
      <div className="bg-white px-4 pt-4 pb-6 mx-2 md:px-6 md:pt-6 md:pb-10  w-full max-w-lg relative">
        <button
          aria-label="close"
          className="absolute top-3 right-3 text-[#1C1C1C] text-2xl cursor-pointer font-normal"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="font-['RethinkSans-Bold'] font-bold leading-[32px] text-[#101010] text-[24px] lg:text-[28px] lg:leading-[36px] my-6">
          Contactez-nous
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="lg:flex lg:gap-6 lg:items-center w-full">
            <div className="mb-4 lg:mb-0">
              <label className="block font-[Inter] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#101010] font-medium mb-[6px]">
                Nom*
              </label>
              <input
                type="text"
                name="phoneNumber"
                required
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
                name="email"
                required
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
              name="website"
              required
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
              name="message"
              required
              placeholder="Écrivez quelque chose...."
            ></textarea>
          </div>

          <p className="font-[Inter] font-medium text-[14px] leading-[22px] text-[#8F8F8F] ">
            Champs obligatoires*
          </p>

          <button
            type="submit"
            disabled={isLoading}
            aria-label="send"
            className="mt-4 w-full bg-[#FF7900] hover:bg-[#101010] font-[Inter] font-medium text-[16px] leading-[24px] text-[#101010] px-4 py-[10px] rounded-md hover:text-[#ffffff] transition cursor-pointer"
          >
            {isLoading ? (
              <PulseLoader size={15} color="white" className="mx-auto" />
            ) : (
              "Envoyez un message"
            )}
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#000000]/50 bg-opacity-10  flex items-center justify-center z-50">
          <div className="bg-white text-black mx-4 p-6 w-[400px] h-[250px] flex flex-col items-center justify-center rounded shadow-xl text-center">
            <div
              className={`w-12 h-12 rounded-full ${
                responseMessage?.toLowerCase().includes("failed")
                  ? "bg-red-600"
                  : "bg-green-600"
              } flex items-center justify-center mb-4`}
            >
              {responseMessage?.toLowerCase().includes("failed") ? (
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <p className="font-[AsapCondensed-Bold]  font-bold text-[24px] leading-[32px] text-[#1C1C1C]">
              Votre message a été envoyé avec succès !
            </p>
            <button
              onClick={() => setShowPopup(false)}
              aria-label="fermer"
              className="mt-4 text-[#EBBA9D] font-[Poppins] font-light text-[18px] leading-[22px] hover:underline cursor-pointer"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;
