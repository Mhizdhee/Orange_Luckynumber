import React, { useState } from "react";
import { getToken, subscribeUser } from "../api/subscriptionApi";

type SubscribeModalProps = {
  onClose: () => void;
  msisdn: string;
};

const SubscribeModal: React.FC<SubscribeModalProps> = ({ onClose, msisdn }) => {
  const [loadingServiceId, setLoadingServiceId] = useState<number | null>(null);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const handleSubscribe = async (serviceId: number) => {
    try {
      setLoadingServiceId(serviceId);

      const tokenResponse = await getToken(serviceId);

      const TokenID = tokenResponse?.TokenID;

      if (!TokenID) {
        throw new Error("TokenID is missing from response");
      }

      const subscribeResponse = await subscribeUser({
        tokenId: TokenID,
        msisdn,
        serviceId,
      });

      if (subscribeResponse?.ResultCode === 1000) {
        setMessage({
          text: ` ${
            subscribeResponse?.Description || "Subscription successful!"
          }`,
          type: "success",
        });
      } else {
        setMessage({
          text: ` ${subscribeResponse?.Description || "Subscription failed."}`,
          type: "error",
        });
      }
      setTimeout(() => {
        setMessage(null);
      }, 1500);
    } catch (error) {
      console.error(" Error during subscription:", error);
      setMessage({ text: " Subscription failed. Try again.", type: "error" });
    } finally {
      setLoadingServiceId(null);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#10101090] bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-white p-6 mx-4 rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl leading-[22px] font-bold font-[Inter]"
        >
          ×
        </button>

        <h2 className="text-[24px] leading-[32px] text-center font-bold font-['RethinkSans-Bold'] my-4 text-[#101010]">
          Choisissez un pack
        </h2>
        <p className="mb-4 text-center text-[16px] text-[#8F8F8F] font-normal font-[Inter] leading-[24px]">
          Choisissez un pack pour envoyer un mot-clé au 7717
        </p>

        <div className="space-y-3">
          {[1184, 1185, 1186].map((id) => (
            <button
              key={id}
              onClick={() => handleSubscribe(id)}
              disabled={loadingServiceId !== null}
              className="block bg-[#FF7900] px-4 py-3.5 text-center w-full rounded"
            >
              <span className="text-[#101010]  text-[16px] font-[Inter] font-medium leading-[24px] ">
                {loadingServiceId === id
                  ? "Traitement..."
                  : id === 1184
                  ? `"NO1" - Pack 50F`
                  : id === 1185
                  ? `"NO2" - Pack 100F`
                  : `"NO3" - Pack 250F`}
              </span>
            </button>
          ))}
        </div>

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default SubscribeModal;
