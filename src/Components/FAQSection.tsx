import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const faqs = [
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
  "Ce contenu est un exemple utilisé comme espace réservé.",
];

const ITEMS_PER_PAGE = 6;

const AccordionItem = ({ question, index, activeIndex, toggle }: any) => {
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
          {` ${question}`}
        </span>
        <span className="text-[#101010] text-2xl cursor-pointer">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 font-[Inter] font-normal leading-[24px] text-[16px] text-[#8F8F8F]">
          Ce contenu est un exemple utilisé comme espace réservé. Il aide à
          démontrer la mise en page et le design d'une page avant que le texte
          réel ne soit disponible. Remplacez-le par du contenu réel une fois
          prêt.
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
              question={faq}
              index={index}
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
