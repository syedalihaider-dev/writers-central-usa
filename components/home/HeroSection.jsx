import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from "./HeroSection.module.css"

export default function HeroSection() {
  return (
    <section className={styles.hero_section}>
    <Image
    src="/home/hero-section-bg.png"
    fill
    alt="Loading Hero Section Background Image"
    fetchPriority="high" 
    priority 
    className={styles.HeroSectionBg}
    style={{ objectFit: "cover" }}
    />
      <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-12">
                <div className={` ${styles.hero_content} text-center`}>
                    <h1>
                        The World Awaits Your 
                        <span className="break_line"></span>
                        <span className="primarytxt">Masterpiece</span>
                    </h1>
                    <p>
                        Your words, our expertise—let’s bring your book to life and get it into your target readers’ hands. 
                        <span className="break_line"></span>
                        We assist emerging & famous writers transition to authors. <br />
                        <span className="primarytxt">Are you ready to make the impact?</span>
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
