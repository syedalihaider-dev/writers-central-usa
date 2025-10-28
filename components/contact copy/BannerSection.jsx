import Image from "next/image";
import styles from "./BannerSection.module.css";
import ActionButtons from "@/components/ui/ActionButtons";

export default function BannerSection({}) {

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
      <div className="col-sm-12 col-md-10">
        <div className={` ${styles.content} text-center`}>
          <h1 className="primarytxt">About Us</h1>
          <p>Empowering authors across the U.S. with publishing, branding, and marketing solutions tailored for success.</p>
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
