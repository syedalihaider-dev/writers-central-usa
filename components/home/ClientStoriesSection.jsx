"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import styles from "./ClientStoriesSection.module.css";

export default function ClientStoriesSection() {
  const videos = [
    { id: 1, src: "/videos/client-01.webm", poster: "/home/client-01.png" },
    { id: 2, src: "/videos/client-02.webm", poster: "/home/client-02.png" },
    { id: 3, src: "/videos/client-01.webm", poster: "/home/client-01.png" },
    { id: 4, src: "/videos/client-02.webm", poster: "/home/client-02.png" },
  ];

  const swiperRef = useRef(null);
  const [init, setInit] = useState(false);

  const initialSlide = Math.floor(videos.length / 2);

  useEffect(() => {
    // wait for client render
    setInit(true);
  }, []);

  useEffect(() => {
    if (init && swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      // enable loop after mount
      if (!swiper.loop) {
        swiper.params.loop = true;
        swiper.loopCreate();
        swiper.update();
        swiper.slideTo(initialSlide + (swiper.loopedSlides || 0), 0);
      }

      // start autoplay
      if (swiper.autoplay) swiper.autoplay.start();
    }
  }, [init, initialSlide]);

  return (
    <section className={`${styles.client_stories_section} sec_padding`}>
      <div className="container">
        <div className={` ${styles.sec_top} text-center`}>
          <h2>Real Stories, Real Results</h2>
          <p>
            At Writer Centra USA, our clients’ success speaks louder than words. Watch these video 
            <span className="break_line"></span> testimonials to see how our services have helped authors, businesses, and professionals 
            <span className="break_line"></span> achieve their publishing goals with confidence.
          </p>
        </div>

        <div className={styles.sec_content}>
          {init && (
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Autoplay]}
              navigation
              centeredSlides
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={800}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className={styles.swiper_container}
            >
              {videos.map((v) => (
                <SwiperSlide key={v.id}>
                  <div className={styles.videoWrapper}>
                    <video
                      src={v.src}
                      poster={v.poster}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className={styles.video}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}
