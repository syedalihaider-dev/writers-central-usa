"use client";
import Image from "next/image";
import styles from "./ActionPlanSection.module.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ActionPlanSection({ data }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data) return null;

  return (
    <section className={styles.actionplan_section}>
      <div className="container">
        <div className={`${styles.sec_top} text-center`}>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-9">
              <h2>
                <span className="primarytxt">{data.highlight}</span>{" "}
                <span className="break_line"></span>
                {data.title}
              </h2>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sec_content}>
        {data.bgImage && (
          <Image
            src={data.bgImage}
            fill
            alt="Process Background Image"
            style={{ objectFit: "cover" }}
            className={styles.contentBg}
          />
        )}
        {isMobile ? (
          <Swiper 
          spaceBetween={20} 
          slidesPerView={1} 
          autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          }} 
          modules={[Autoplay]}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            991: { slidesPerView: 1 },
            }}
          >
            {data.steps?.map((step, idx) => (
              <SwiperSlide key={idx}>
                <li>
                  <h5>
                    {step.highlight} <br />
                    {step.title}
                  </h5>
                  <div className={styles.inner_wrapper}>
                    <h5>
                      {step.highlight}
                      <br />
                      {step.title}
                    </h5>
                    <p className="scroll_block">{step.text}</p>
                    <button type="button" className="popup_btn">
                      Get Started
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="11"
                        viewBox="0 0 15 11"
                        fill="none"
                      >
                        <path
                          d="M14 6.13815C14.2604 5.8778 14.2604 5.45569 14 5.19534L9.75741 0.952702C9.49706 0.692353 9.07495 0.692353 8.8146 0.952702C8.55425 1.21305 8.55425 1.63516 8.8146 1.89551L12.5858 5.66675L8.8146 9.43798C8.55425 9.69833 8.55425 10.1204 8.8146 10.3808C9.07495 10.6411 9.49706 10.6411 9.75741 10.3808L14 6.13815ZM0.195312 5.66675L0.195313 6.33341L13.5286 6.33341L13.5286 5.66675L13.5286 5.00008L0.195312 5.00008L0.195312 5.66675Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <ul>
            {data.steps?.map((step, idx) => (
              <li key={idx}>
                <h5>
                  {step.highlight} <br />
                  {step.title}
                </h5>
                <div className={styles.inner_wrapper}>
                  <h5>
                    {step.highlight}
                    <br />
                    {step.title}
                  </h5>
                  <p className="scroll_block">{step.text}</p>
                  <button type="button" className="popup_btn">
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="11"
                      viewBox="0 0 15 11"
                      fill="none"
                    >
                      <path
                        d="M14 6.13815C14.2604 5.8778 14.2604 5.45569 14 5.19534L9.75741 0.952702C9.49706 0.692353 9.07495 0.692353 8.8146 0.952702C8.55425 1.21305 8.55425 1.63516 8.8146 1.89551L12.5858 5.66675L8.8146 9.43798C8.55425 9.69833 8.55425 10.1204 8.8146 10.3808C9.07495 10.6411 9.49706 10.6411 9.75741 10.3808L14 6.13815ZM0.195312 5.66675L0.195313 6.33341L13.5286 6.33341L13.5286 5.66675L13.5286 5.00008L0.195312 5.00008L0.195312 5.66675Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
