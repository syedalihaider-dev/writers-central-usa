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
      <div className="col-sm-12 col-md-12">
        <div className={` ${styles.content} text-center`}>
          <h2>Ready to give <br />yourself a whole</h2>
          <h1 className="primarytxt">new digital look?</h1>
          <p>Want to be the best renowned author in the town? Look no more, contact us today!</p>
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
