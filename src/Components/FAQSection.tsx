import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "Qu’est-ce que NUMÉRO D’OR ?",
    answer:
      "NUMÉRO D’OR est un tirage au sort quotidien qui permet aux abonnés d’entrer leur numéro pour correspondre de façon séquentielle à un numéro ORANGE choisi au hasard à partir du pool total (ORANGE) de la base d’abonnés actifs.",
  },
  {
    question: "Qui peut souscrire à NUMÉRO D’OR et au tirage journalier?",
    answer:
      "Tous les abonnés actifs de ORANGE, à l’exception des clients post payés et des membres du personnel et de la famille de ORANGE qui ne sont pas admissibles.",
  },
  {
    question: "Comment souscrire et s’enregistrer sur le service ?",
    answer: "En envoyant le mot-clé NO1, NO2, NO3, au code court « 7771 ».",
  },
  {
    question: "Comment savoir que j’ai été enregistré avec succès ?",
    answer:
      "Vous recevrez une réponse SMS confirmant votre inscription au service et votre inscription au tirage du jour, mais veuillez noter que c’est seulement si vous avez été facturé avec succès pour l’une des offres NUMÉRO D’OR que vous serez inscrit au tirage quotidien.",
  },
  {
    question:
      "Je veux souscrire aujourd’hui mais je n’ai pas de crédit de communication, est-ce possible ?",
    answer:
      "Vous pouvez vous inscrire au service même si vous n’avez pas de crédit de communication, mais vous devez créditer votre téléphone et être facturé avec succès pour entrer dans le tirage du jour.",
  },
  {
    question: "À quelle heure de la journée dois-je souscrire ?",
    answer:
      "L’abonnement pour le tirage du jour est ouvert jusqu’à 23h59 (si vous avez été facturé avec succès), chaque abonnement à partir de 00h00 sera inscrit au tirage du lendemain.",
  },
  {
    question:
      "À combien devrais-je être facturé ? Est-ce journalier, mensuel ou hebdomadaire",
    answer:
      "La facturation pour les offres NUMÉRO D’OR se fait au quotidien et est renouvelé chaque joue. Les abonnés inscrits seront facturés UNE FOIS par jour pour participer au tirage quotidien.",
  },
  {
    question: "Comment faire pour annuler mon abonnement à NUMÉRO D’OR ?",
    answer:
      "Pour vous désinscrire du service, vous devez envoyer les mots-clés STOP NO1, STOP NO2, STOP NO3 au 7771, vous recevrez alors une confirmation par SMS que vous avez été retiré du service.",
  },
  {
    question: "Comment faire pour savoir que j’ai gagné ?",
    answer:
      "Un SMS annonçant les 5 derniers chiffres du numéro tiré sera envoyé à tous les abonnés participants.",
  },
  {
    question: "Quand pourrai-je recevoir mon prix si je gagne ?",
    answer:
      "Tous les gagnants recevront un SMS les informant qu’ils ont gagné ainsi que le montant du prix. Si vous avez gagné un prix en espèces ou du crédit de communication, vous recevrez dans les 48h votre gain directement dans votre compte Mobile money et/ou votre compte principal de crédit de communication. Si vous n’avez pas de compte Mobile money, vous avez 48h pour en créer un.",
  },
  {
    question:
      "Qu’est ce qui se passerait si j’ai souscrit au service et qu’ensuite je ne recharge pas mon numéro pendant un long moment ?",
    answer: "Vous serez automatiquement exclu après 30 jours.",
  },
];

const ITEMS_PER_PAGE = 4;

const AccordionItem = ({
  question,
  answer,
  index,
  activeIndex,
  toggle,
}: any) => {
  const isOpen = index === activeIndex;

  return (
    <div className="border-b border-[#EEEEEE] py-4">
      <button
        onClick={() => toggle(index)}
        className="flex justify-between items-center w-full text-left"
      >
        <span
          className={`font-[Inter] font-medium leading-[24px] text-[16px] transition-colors duration-300 ${
            isOpen ? "text-[#FF7900]" : "text-[#101010]"
          }`}
        >
          {question}
        </span>
        <span className="text-[#101010] text-2xl cursor-pointer">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 font-[Inter] font-normal leading-[24px] text-[16px] text-[#8F8F8F]">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(faqs.length / ITEMS_PER_PAGE);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const startIdx = currentPage * ITEMS_PER_PAGE;
  const visibleFaqs = faqs.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handleDotClick = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    setActiveIndex(null);
  };

  const goToPrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
    setActiveIndex(null);
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
    setActiveIndex(null);
  };

  return (
    <>
      <section id="faq" className="px-4 md:px-20 py-16 bg-[#FFFFFF] ">
        <h2 className="font-bold font-['RethinkSans-Bold'] text-[28px] whitespace-nowrap lg:text-[44px] leading-[36px] lg:leading-[52px] text-center mb-10 lg:mb-12 text-[#101010] ">
          Avez-vous des questions ? <br />{" "}
          <span className="text-[#101010]">Nous avons des réponses.</span>
        </h2>

        <div className="max-w-3xl mx-auto border-t border-[#EEEEEE]">
          {visibleFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index + startIdx}
              activeIndex={activeIndex}
              toggle={toggle}
            />
          ))}
        </div>

        {/* Pagination section */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={goToPrev}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#EEEEEE] text-black hover:bg-[#FF7900] disabled:opacity-50 cursor-pointer"
            disabled={currentPage === 0}
          >
            <ChevronLeft />
          </button>
          <div className="flex gap-3 bg-[#EEEEEE] rounded-[24px] py-3 px-4 cursor-pointer">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentPage ? "bg-[#101010]" : "bg-[#CCCCCC]"
                }`}
              ></button>
            ))}
          </div>
          <button
            onClick={goToNext}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#EEEEEE] text-black hover:bg-[#FF7900] cursor-pointer disabled:opacity-50"
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRight />
          </button>
        </div>
      </section>
    </>
  );
};
export default FAQSection;
