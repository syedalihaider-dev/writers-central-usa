"use client";
import { useState } from "react";
import styles from "./FaqsSection.module.css";
import Image from "next/image";

export default function FaqsSection({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`${styles.faqs_section} sec_padding`}>
      <Image 
      src="/faqs-bg.png"
      alt="Loading Background Image" 
      fill 
      style={{ objectFit: "cover" }} 
      className={styles.sectionBg} 
      />
      <div className="container">
        <div className="text-center mb-5">
          <h2>{data.title}</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            {data.faqs.slice(0, 3).map((faq, index) => (
              <div
                key={index}
                className={`${styles.faq_item} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.faq_question}>
                  <h6>{faq.question}</h6>
                  <Image
                    src="/home/arrow.png"
                    width={14}
                    height={14}
                    alt="arrow"
                    className={`${styles.arrow} ${
                      activeIndex === index ? styles.rotate : ""
                    }`}
                  />
                </div>
                {activeIndex === index && (
                  <p className={styles.faq_answer}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
          <div className="col-md-6">
            {data.faqs.slice(3, 6).map((faq, index) => {
              const rightIndex = index + 3;
              return (
                <div
                  key={rightIndex}
                  className={`${styles.faq_item} ${
                    activeIndex === rightIndex ? styles.active : ""
                  }`}
                  onClick={() => toggleFaq(rightIndex)}
                >
                  <div className={styles.faq_question}>
                    <h6>{faq.question}</h6>
                    <Image
                      src="/home/arrow.png"
                      width={14}
                      height={14}
                      alt="arrow"
                      className={`${styles.arrow} ${
                        activeIndex === rightIndex ? styles.rotate : ""
                      }`}
                    />
                  </div>
                  {activeIndex === rightIndex && (
                    <p className={styles.faq_answer}>{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}