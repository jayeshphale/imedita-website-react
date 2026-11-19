import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import styles from './FAQAccordion.module.css';

export function FAQAccordion({ items = [] }) {
  // Open first FAQ by default
  const [openIndices, setOpenIndices] = useState([0]);

  const toggleIndex = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className={styles.faqWrapper} itemScope itemType="https://schema.org/FAQPage">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const faqId = `faq-answer-${index}`;
        const headerId = `faq-header-${index}`;

        return (
          <div
            key={index}
            className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              type="button"
              id={headerId}
              className={styles.faqQuestionBtn}
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              aria-controls={faqId}
            >
              <div className={styles.questionLeft}>
                <span className={styles.qIndex}>Q{index + 1}</span>
                <span className={styles.questionText} itemProp="name">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                size={18}
                className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div
                id={faqId}
                className={styles.faqAnswer}
                role="region"
                aria-labelledby={headerId}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className={styles.answerInner} itemProp="text">
                  {typeof item.answer === 'string' ? (
                    <p>{item.answer}</p>
                  ) : (
                    item.answer
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;
