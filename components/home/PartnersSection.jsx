"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./PartnersSection.module.css";

export default function PartnersSection() {
  const partners = [
    { id: 1, img: "/partners/partner1.png", alt: "Loading Partner Image" },
    { id: 2, img: "/partners/partner2.png", alt: "Loading Partner Image" },
    { id: 3, img: "/partners/partner3.png", alt: "Loading Partner Image" },
    { id: 4, img: "/partners/partner4.png", alt: "Loading Partner Image" },
    { id: 5, img: "/partners/partner5.png", alt: "Loading Partner Image" },
    { id: 6, img: "/partners/partner6.png", alt: "Loading Partner Image" },
    { id: 7, img: "/partners/partner6.png", alt: "Loading Partner Image" },
  ];

  return (
    <section className={styles.partners_section}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className={styles.swiper_container}
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className={styles.partner_logo}>
                <Image
                  src={partner.img}
                  alt={partner.alt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
}
