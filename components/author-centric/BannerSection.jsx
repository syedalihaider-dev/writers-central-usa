"use client";
import Image from "next/image";
import styles from "./BannerSection.module.css";
import ActionButtons from "@/components/ui/ActionButtons"

export default function BannerSection({ data }) {
const { title, heading, highlight, description} = data;

return (
<section className={styles.banner}>
  <Image 
  src="/hero-section-bg.png"
  alt="Banner Bg Image" 
  fill 
  style={{ objectFit: "cover" }} 
  className={styles.bannerBg} 
  />
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-sm-12 col-md-12">
        <div className={` ${styles.content} text-center`}>
          <h6 className="primarytxt">{title}</h6>
          <h1>
            {heading} <span className="break_line"></span>
            <span className="primarytxt"> {highlight}</span> 
          </h1>
          <p>{description}</p>
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