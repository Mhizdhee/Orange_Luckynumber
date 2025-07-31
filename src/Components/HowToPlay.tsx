import React from "react";
import Phone1 from "../assets/Images/Phone.png";
// import Phone2 from "../assets/Images/Phone2.png";
// import Phone2 from "../assets/Images/Phone2.png";
import Phone3 from "../assets/Images/Phone3.png";

const HowToPlay: React.FC = () => {
  return (
    <>
      <div>
        <section id="how-to-play" className="px-6 lg:px-28 py-20 bg-[#101010]">
          {/* Headline */}
          <div className="text-center">
            <h1 className="font-['RethinkSans-Bold'] text-[30px] leading-tight lg:text-[44px] font-bold lg:leading-[52px]  text-[#FFFFFF]">
              Jouer est simple.
              <br />
              Gagner est réel.
            </h1>
            <p className="text-[#B0B0B0] font-[Inter] font-normal leading-[24px] text-[16px] max-w-[720px] mx-auto mt-4">
              Trois étapes simples vous séparent de votre chance de votre
              réussite. Pas de stress, pas de retard—envoyez un SMS, confirmez,
              et rejoignez l'action.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 mt-12">
            {/* Step 1 */}

            <div className="flex flex-col items-center text-left w-full max-w-[340px]">
              <img src={Phone1} alt="Step 1" className=" object-contain mb-4" />
              <div className="flex items-center gap-6">
                <p className="text-[148px] font-[Bangers] font-normal leading-[108px] text-[#242424]">
                  1
                </p>
                <div className="flex flex-col max-w-[373px] text-left ">
                  <p className="text-[18px] font-['RethinkSans-Bold'] leading-[26px] font-semibold text-[#FFFFFF]">
                    SMS "NO3" au 7717
                  </p>
                  <p className="font-[Inter] font-normal  leading-[22px] text-[14px] text-[#8F8F8F]">
                    Commencez par envoyer “NO3” au 7717 depuis votre mobile.
                    Simple et rapide !
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            {/* <div className="flex flex-col items-center text-left w-full max-w-[340px]">
              <img
                src={Phone2}
                alt="Step 2"
                className="object-contain mx-auto mb-4"
              />
              <div className="flex items-center gap-6">
                <p className="text-[148px] font-[Bangers] font-normal leading-[108px] text-[#242424]">
                  2
                </p>
                <div className="flex flex-col max-w-[373px] text-left">
                  <p className="text-[18px] font-['RethinkSans-Bold'] leading-[26px] font-semibold text-[#FFFFFF]">
                    Accepter le renouvellement
                  </p>
                  <p className="font-[Inter]  font-normal leading-[22px] text-[14px] text-[#8F8F8F]">
                    Confirmez votre renouvellement automatique pour rester dans
                    la course sans perdre une miette.
                  </p>
                </div>
              </div>
            </div> */}

            {/* Step 3 */}
            <div className="flex flex-col items-center text-left w-full max-w-[340px]">
              <img
                src={Phone3}
                alt="Step 2"
                className="object-contain mx-auto mb-4"
              />
              <div className="flex items-center text-left gap-6">
                <p className="text-[148px] font-[Bangers] font-normal leading-[108px] text-[#212121]">
                  2
                </p>
                <div className="flex flex-col max-w-[373px] text-left">
                  <p className="text-[18px] font-['RethinkSans-Bold'] leading-[26px] font-semibold text-[#FFFFFF]">
                    Rejoindre le jeu en direct
                  </p>
                  <p className="font-[Inter] font-normal leading-[22px] text-[14px] text-[#8F8F8F]">
                    Connectez-vous en direct et vivez l'excitation. Votre numéro
                    sera-t-il le prochain grand gagnant ?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowToPlay;
