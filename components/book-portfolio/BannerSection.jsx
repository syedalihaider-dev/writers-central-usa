import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from "./BannerSection.module.css"

export default function BannerSection() {
return (
<section className={styles.banner_section}>
    <Image 
    src="/hero-section-bg.png" 
    fill 
    alt="Loading Hero Section Background Image" 
    className={styles.HeroSectionBg} 
    style={{ objectFit: "cover" }} 
    />
    <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-12">
                <div className={` ${styles.banner_content} text-center`}>
                    <h1 className="primarytxt">Portfolio</h1>
                    <p>
                        A great book deserves more than just publication—it deserves a strategic presence, powerful
                        marketing, and an unforgettable brand identity.
                        <span className="break_line"></span>
                        From compelling author websites to high-impact book marketing & eye-catching cover designs, our
                        work speaks for itself.
                    </p>
                    <div className="combo_btn">
                        <ActionButtons />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
)
}
