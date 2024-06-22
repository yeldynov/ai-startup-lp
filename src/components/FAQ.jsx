/* eslint-disable react/prop-types */
import { useState } from "react";

import Background from "../assets/bg.png";
import UnionL from "../assets/union.svg";
import UnionR from "../assets/union-r.svg";
import Keywords from "../assets/keywords.png";
import PlusIcon from "../assets/plus.svg";
import MinusIcon from "../assets/minus.svg";

export const ACCORDION_ITEMS = [
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, of course! The trial period is indefinite, but it does have limits on interactions and uploads. At any time, you can change or upgrade to your current plan.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, of course! The trial period is indefinite, but it does have limits on interactions and uploads. At any time, you can change or upgrade to your current plan.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, enim magni ab quos quo eius. Itaque maiores exercitationem, consequuntur dolorem in dolorum fugiat. Eius reprehenderit omnis neque eligendi incidunt nihil. Eius iure minima ea obcaecati odio, numquam vel deserunt nostrum dolore labore nemo neque molestias itaque aperiam. Minima, earum corrupti 2",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, enim magni ab quos quo eius. Itaque maiores exercitationem, consequuntur dolorem in dolorum fugiat. Eius reprehenderit omnis neque eligendi incidunt nihil. Eius iure minima ea obcaecati odio, numquam vel deserunt nostrum dolore labore nemo neque molestias itaque aperiam. Minima, earum corrupti 3",
  },
  {
    question: "How does billing work?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, enim magni ab quos quo eius. Itaque maiores exercitationem, consequuntur dolorem in dolorum fugiat. Eius reprehenderit omnis neque eligendi incidunt nihil. Eius iure minima ea obcaecati odio, numquam vel deserunt nostrum dolore labore nemo neque molestias itaque aperiam. Minima, earum corrupti 4",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, enim magni ab quos quo eius. Itaque maiores exercitationem, consequuntur dolorem in dolorum fugiat. Eius reprehenderit omnis neque eligendi incidunt nihil. Eius iure minima ea obcaecati odio, numquam vel deserunt nostrum dolore labore nemo neque molestias itaque aperiam. Minima, earum corrupti 5",
  },
  // Add more items here
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="w-full md:h-[1023px]"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* header */}
      <div className="flex flex-col items-center justify-center p-0 px-5 pt-[65px] md:mx-10 md:px-0 md:pt-[130px]">
        <div className="mt-[18px] flex items-center justify-center gap-2 md:mt-0">
          <img src={UnionL} alt="" />
          <h5 className="text-center font-darker-grotesque text-[10px] font-bold leading-[1.5] text-[#030610] md:mt-0 md:text-lg">
            ALL YOU NEED
          </h5>
          <img src={UnionR} alt="" />
        </div>
        {/* text */}
        <h2 className="relative pt-[2px] text-center font-space-grotesk text-[26px] font-semibold leading-[120%] md:w-1/2 md:pt-0 md:text-[40px]">
          <span className="bg-gradient-to-r from-purple-600 to-blue-900 bg-clip-text text-transparent">
            Frequently
          </span>{" "}
          asked questions
        </h2>
        <p className="mt-[14px] text-center font-darker-grotesque text-[15px] leading-[150%] text-[#081A56] md:mt-[24px] md:w-[480px] md:text-lg">
          Everything you need to know about the product and billing.
        </p>
      </div>
      {/* Accordion */}
      <div className="mx-5 mt-7 space-y-3 md:mx-[345px] md:mt-10 md:space-y-5">
        {ACCORDION_ITEMS.map((item, index) => (
          <AccordionItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            activeIndex={activeIndex}
            onItemClick={handleItemClick}
          />
        ))}
      </div>
      <img className="mt-10" src={Keywords} alt="" />
    </section>
  );
};

export default FAQ;

const AccordionItem = ({
  index,
  question,
  answer,
  activeIndex,
  onItemClick,
}) => {
  return (
    <div
      className={`${
        activeIndex === index
          ? "mb-5 gap-3 py-[15px] md:py-[24px]"
          : "gap-0 py-[15px] md:py-[16px]"
      } group flex flex-col rounded-lg border-[0.5px] border-[#a7a7a7] bg-white px-[12px] text-black md:gap-2 md:px-[24px]`}
      tabIndex={index}
    >
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => onItemClick(index)}
      >
        <span className="pr-2 font-space-grotesk text-[15px] text-[#030610] md:text-xl">
          {question}
        </span>
        {activeIndex === index ? (
          <img src={MinusIcon} alt="Minus Icon" />
        ) : (
          <img src={PlusIcon} alt="Plus Icon" />
        )}
      </div>
      <div
        className={`${
          activeIndex === index
            ? "visible max-h-screen opacity-100"
            : "invisible max-h-0 opacity-0"
        } h-auto items-center font-darker-grotesque text-[15px] text-[#081a56] transition-all md:pr-16 md:text-lg`}
      >
        {answer}
      </div>
    </div>
  );
};
