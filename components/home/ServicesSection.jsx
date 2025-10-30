'use client'
import Image from "next/image";
import Link from "next/link";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from "./ServicesSection.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SERVICES = [
  { 
    id: 1, 
    title: "Book <br>Marketing", 
    icon: "/home/book-marketing-icon.png", 
    excerpt: "We boost book visibility and sales with targeted marketing campaigns.", 
    href: "/services/book-marketing-services" 
  },
  { 
    id: 2, 
    title: "Author <br>Website", 
    icon: "/home/author-website.png", 
    excerpt: "Custom author websites to showcase your brand and sell your books.", 
    href: "/author-centric/author-website" 
  },
  { 
    id: 3, 
    title: "Social Media <br>Marketing", 
    icon: "/home/smm-icon.png", 
    excerpt: "End-to-end book launch plans that generate buzz & reviews quickly.", 
    href: "/author-centric/social-media-marketing" 
  },
  { 
    id: 4, 
    title: "Author <br>Profiling", 
    icon: "/home/author-profiling-icon.png", 
    excerpt: "Strategic social media campaigns tailored for authors and books.", 
    href: "/author-centric/author-profiling" 
  },
  { 
    id: 5, 
    title: "SEO <br>Marketing", 
    icon: "/home/seo-marketing-icon.png", 
    excerpt: "Get featured in media, podcasts and book blogs to reach new readers.", 
    href: "/author-centric/search-engine-optimization" 
  },
  { 
    id: 6, 
    title: "Author <br>Branding", 
    icon: "/home/author-website.png", 
    excerpt: "Professional editing packages to polish your manuscript for publication.", 
    href: "/author-centric/author-branding" 
  },
];

export default function ServicesSection() {
  return (
    <section className={`${styles.services_section} sec_padding`}>
      <div className={`${styles.sec_top} text-center`}>
        <h2>Helping Your Story Stand Out</h2>
        <p className="mt-3 mb-0">
          Want to create your legacy or generate sales? Whatever your goals are, with Writers Central USA 
          <span className="break_line"></span>
          by your side, nothing can stop you from achieving them.
        </p>
      </div>
      <div className={styles.sec_content}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={5}
          pagination={{ clickable: false }}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 5 },
          }}
          aria-label="Services slider"
        >
          {SERVICES.map((s) => (
            <SwiperSlide key={s.id}>
              <div className={styles.box}>
                <div className={styles.img}>
                  <Image
                    src={s.icon}
                    width={65}
                    height={65}
                    alt={`${s.title.replace(/<br>/g, ' ')} Icon`}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h5
                  className={styles.title}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p className="scroll_block">{s.excerpt}</p>
                <div className="combo_btn">
                  <Link href={s.href} className={styles.btn_link}>
                    Get Started{' '}
                    <Image
                      src="/home/arrow.png"
                      width={13}
                      height={12}
                      alt="arrow"
                      style={{ objectFit: 'contain' }}
                    />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="combo_btn">
          <ActionButtons />
        </div>
      </div>
    </section>
  );
}
