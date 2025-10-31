'use client'
import Image from "next/image";
import styles from "./TestimonialsSection.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = [
  { 
    id: 1, 
    title: "Daniela Dominato", 
    icon: "/avatar-01.png", 
    excerpt: "Marketing has always been difficult for me as an author, but Writers central USA changed everything, Their advertising strategies were well thought out and timed to coincide with the publication of my book. To create buzz, they use influencer relationships, log promotions, and email marketing. Sales and reviews increased significantly, and the results were amazing. They also assisted me in determining the platforms and approaches that are most effective for my genre. I learned a lot about reader behavior from their marketing report. Never in my life have I felt more assumed about advertising my work."
  },
  { 
    id: 2, 
    title: "Sam Sarah", 
    icon: "/avatar-01.png", 
    excerpt: "Writers Central USA created a remarkable author profile that showcased my accomplishments and character. They were adept at persuasively presenting my experience and work. Their article came out as both genuine and expert. It has given me prestige in literary circles and media attention. These days, I utilize this profile on all platforms. They are unparalleled in their ability to properly present authors."
  },
  { 
    id: 3, 
    title: "Rylan Foster", 
    icon: "/avatar-01.png", 
    excerpt: "I have a children's book with stunning illustrations. Each scene's movement and passion were expertly portrayed by the Writers Central USA. The attention to detail is incredible, and the colors are striking. They collaborated closely with me to ensure that every image was excellent. I'm thrilled with the outcome."
  },
  { 
    id: 4, 
    title: "Ayden Morales", 
    icon: "/avatar-01.png", 
    excerpt: "I was very impressed by their personalized approach. They customized everything to meet my objectives rather than providing prefabricated answers. I was pleasantly surprised by the outcome. Readers and peers have given me great feedback. This is proficient in their field."
  },
  { 
    id: 5, 
    title: "Wendy Coyman", 
    icon: "/avatar-01.png", 
    excerpt: "They provided a comprehensive and perceptive Editing service. They improved my manuscript while maintain my voice, including everything from structural recommendations to grammar checks. I valued the process's collaborative nature. They fulfilled deadlines with professionalism and without sacrificing quality. I was more comfortable sending in my manuscript to be published. After editing, the change was very noticeable."
  },
  { 
    id: 6, 
    title: "Miranda Cantin", 
    icon: "/avatar-01.png", 
    excerpt: "I had a stunning Writers Website created by Writers Central USA that exactly captures my personality and writing style. Their team focused on every aspect, including layout, navigation and mobile friendliness, and they asked the correct questions Readers are able to interact my content more fully because to the neat and polished design. In order for me to make adjustments in the future, they also made sure I had complete access over the backend. I saw a discernible increase in newsletter sign-ups and reader engagement. Their post-launch assistance was efficient and timely. I now recommend them to every writer who wants to establish a strong online presence."
  },
];

export default function TestimonialsSection() {
  return (
    <section className={`${styles.testimonials_section} sec_padding`}>
      <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className={`${styles.sec_top} text-center`}>
                    <h2>Our Clients Have A Way With Words</h2>
                    <p className="mt-3 mb-0">Let's hear the authors who vouch the best for us!</p>
                </div>
                <div className={styles.sec_content}>
                    <Swiper modules={[Navigation]} 
                    spaceBetween={24} 
                    slidesPerView={3} 
                    pagination={{ clickable: false }} 
                    breakpoints={{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                    }} 
                    aria-label="testimonials slider">
                    {Testimonials.map((s) => (
                    <SwiperSlide key={s.id}>
                    <div className={styles.box}>
                        <div className={styles.head}>
                            <div className={styles.img}>
                                <Image 
                                src={s.icon} 
                                width={86} 
                                height={86} 
                                alt="Loading Avatar Image" 
                                style={{ objectFit: 'contain' }} 
                            />
                            </div>
                            <h6>{s.title}</h6>
                        </div>
                        <p className="scroll_block mb-0">{s.excerpt}</p>
                    </div>
                    </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
