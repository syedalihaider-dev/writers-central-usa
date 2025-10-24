"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import styles from "./ProcessSection.module.css";
import ActionButtons from "@/components/ui/ActionButtons";

const slides = [
  {
    img: "/about/process-01.png",
    title: "Consultation & Planning",
    summary:
      "A successful author brand starts with clarity. We work with you to define your goals, identify your audience, and craft a roadmap that aligns with your vision. Every bestselling author starts with a strategy—yours begins here.",
  },
  {
    img: "/about/process-02.png",
    title: "Manuscript Enhancement",
    summary:
      "Your words hold power, and our expert editors ensure they shine. From developmental editing to fine-tuning prose, we refine your manuscript while preserving your unique voice.",
  },
  {
    img: "/about/process-03.png",
    title: "Branding & Digital Presence",
    summary:
      "Readers don’t just buy books; they buy into authors. We craft compelling author profiles, design visually striking websites, and develop a marketing strategy that positions you as an authority in your genre.",
  },
  {
    img: "/about/process-04.png",
    title: "Publishing & Distribution",
    summary:
      "The dream becomes reality. Whether you choose self-publishing or traditional publishing, we ensure your book reaches the right platforms—from Amazon Kindle to Barnes & Noble and beyond.",
  },
  {
    img: "/about/process-05.png",
    title: "Marketing & Reader Engagement",
    summary:
      "Publishing is just the beginning. Our customized marketing campaigns, social media strategies, and book launch initiatives create buzz and connect you with lifelong readers.",
  },
];

export default function ProcessSection() {
  return (
    <section className={styles.process_section}>
      <div className={styles.sec_left}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 12 },
            640: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className={styles.processSwiper}
        >
          {slides.map((s, idx) => (
            <SwiperSlide key={idx}>
              <li>
                <div className={styles.box}>
                  <div className={styles.inner_box}>
                    <div className={styles.img}>
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className={styles.inner_box_after}>
                      <h6>{s.title}</h6>
                      <p className="scroll_block">{s.summary}</p>
                      <div className="combo_btn">
                        <button type="button" className={ `${styles.process_btn} popup-btn`}>
                          <Image
                            src="/about/circle-btn-bg.png"
                            fill
                            alt="Loading Icon"
                            className={styles.img}
                            style={{ objectFit: "contain" }}
                          />
                          <div className={styles.icon}>
                            <Image
                              src="/about/circle-btn-content.png"
                              fill
                              alt="Loading Icon"
                              style={{ objectFit: "contain" }}
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <h6 dangerouslySetInnerHTML={{ __html: s.title.replace(" & ", " & <br />") }} />
                </div>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container">
        <div className="row justify-content-end">
          <div className="col-sm-12 col-md-6">
            <div className={styles.sec_right}>
              <h2>The Publishing Journey</h2>
              <p>
                From the first spark of inspiration to a book that readers can’t put down, we guide authors
                through every stage of their publishing journey.
              </p>
              <div className="combo_btn">
                <ActionButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}