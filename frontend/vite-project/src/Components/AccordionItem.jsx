
import React, { useRef } from 'react';
import { ChevronDown } from './icons';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onClick}>
        <span className={`faq-icon ${isOpen ? "open" : ""}`}>?</span>
        {question}
        <div className={`arrow-icon ${isOpen ? "open" : ""}`}>
          <ChevronDown />
        </div>
      </button>
      <div
        ref={contentHeight}
        className="faq-answer"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
