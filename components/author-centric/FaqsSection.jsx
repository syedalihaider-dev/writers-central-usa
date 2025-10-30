"use client";
import { useState } from "react";
import styles from "./FaqsSection.module.css";
import Image from "next/image";

export default function FaqsSection({ data = {} }) {
  const faqs = Array.isArray(data.faqs) ? data.faqs : [];
  const title = data.title || "";
  const subtitle = data.subtitle || "";

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((curr) => (curr === index ? null : index));
  };

  if (!faqs.length) return null;

  return (
    <section className={`${styles.faqs_section} sec_padding`} aria-labelledby="faqs-heading">
      <Image
        src="/faqs-bg.png"
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className={styles.sectionBg}
        aria-hidden="true"
      />

      <div className="container">
        <div className="text-center mb-5">
          <h2 id="faqs-heading">{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>

        <div className="row">
          <div className="col-md-6">
            {faqs.slice(0, 3).map((faq, index) => (
              <div key={index} className={`${styles.faq_item} ${activeIndex === index ? styles.active : ""}`}>
                <button
                  type="button"
                  className={styles.faq_question_btn}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => toggleFaq(index)}
                >
                  <h6 className={styles.faq_question}>{faq.question}</h6>
                  <Image
                    src="/home/arrow.png"
                    width={14}
                    height={14}
                    alt=""
                    aria-hidden="true"
                    className={`${styles.arrow} ${activeIndex === index ? styles.rotate : ""}`}
                  />
                </button>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-hidden={activeIndex === index ? "false" : "true"}
                  className={`${styles.faq_answer} ${activeIndex === index ? styles.open : ""}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="col-md-6">
            {faqs.slice(3, 6).map((faq, idx) => {
              const index = idx + 3;
              return (
                <div key={index} className={`${styles.faq_item} ${activeIndex === index ? styles.active : ""}`}>
                  <button
                    type="button"
                    className={styles.faq_question_btn}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <h6 className={styles.faq_question}>{faq.question}</h6>
                    <Image
                      src="/home/arrow.png"
                      width={14}
                      height={14}
                      alt=""
                      aria-hidden="true"
                      className={`${styles.arrow} ${activeIndex === index ? styles.rotate : ""}`}
                    />
                  </button>

                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-hidden={activeIndex === index ? "false" : "true"}
                    className={`${styles.faq_answer} ${activeIndex === index ? styles.open : ""}`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
