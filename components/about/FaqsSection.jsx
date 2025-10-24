"use client";
import { useState } from "react";
import styles from "../services/FaqsSection.module.css";
import Image from "next/image";

export default function FaqsSection() {
  const title = "Frequently Asked Questions";
//   const subtitle = "Find answers to the most common questions about our author branding and publishing services.";

  const faqs = [
    {
      question: "What services does Writers Central USA provide?",
      answer:
        "We specialize in author branding, digital presence, book marketing, publishing assistance, and reader engagement strategies. Whether you’re a first-time author or a seasoned writer looking to expand your reach, we provide the tools and expertise to elevate your author brand.",
    },
    {
      question: "Why is author branding important?",
      answer:
        "A strong author brand helps you stand out, attracts loyal readers, and increases book sales. It’s more than just a logo or website—it’s about building a presence that resonates with your audience and keeps them coming back for more.",
    },
    {
      question: "Can you help with book marketing and promotion?",
      answer:
        "We create customized marketing campaigns, including social media strategies, book launch plans, and digital advertising, to ensure your book reaches the right audience.",
    },
    {
      question: "Do I need to have a finished manuscript to work with you?",
      answer:
        "Not at all! Whether you’re at the idea stage, mid-way through writing, or have a polished manuscript ready for publishing, we can help refine, market, and position your book for success.",
    },
    {
      question: "What publishing options do you offer?",
      answer:
        "We assist with both self-publishing and traditional publishing strategies, helping you navigate platforms like Amazon Kindle, Barnes & Noble, and IngramSpark to get your book into the hands of readers.",
    },
  ];

  // ✅ Pehla FAQ default open (index 0)
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex((curr) => (curr === index ? null : index));
  };

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
          {/* {subtitle && <p>{subtitle}</p>} */}
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
            {faqs.slice(3).map((faq, idx) => {
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