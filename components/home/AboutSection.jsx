import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from "./AboutSection.module.css"

export default function AboutSection() {
  return (
    <section className={` ${styles.about_section} sec_padding`}>
    <Image
    src="/home/about-section-bg.png"
    fill
    alt="Loading About Section Background Image"
    className={styles.AboutSectionBg}
    style={{ objectFit: "cover" }}
    />
      <div className="container">
        <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
                <div className={styles.sec_left}>
                    <h2>
                        Telling Your Tales, <span className="break_line"></span>
                        One Book At A Time
                    </h2>
                    <h5>Professional. Affordable. Committed.</h5>
                    <p className="scroll_block">
                        At Writers Central USA, we believe every book deserves to be heard, seen, and loved by its
                        audience. Imagine having a team that handles all the technical details—branding, marketing, and
                        website creation—so you can focus only on writing. We’re here to ensure your story reaches
                        readers while creating an author brand that resonates beyond the page.
                        <br /><br />
                        We offer every service an author might need, from publishing and book design to social media
                        marketing and SEO, all under one roof. Working with us means your book gets a dedicated team
                        focused on giving it the spotlight it deserves while making the journey smooth, engaging, and
                        effective.
                    </p>
                    <div className="combo_btn">
                        <ActionButtons />
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className={styles.sec_right}>
                    <div className={styles.star_img}>
                        <Image
                        src="/home/star-img.png"
                        fill
                        alt="Loading Star Image" 
                        style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div className={` ${styles.book_img_01} ${styles.book_img} `}>
                        <Image
                        src="/home/about-book-01.png"
                        fill
                        alt="Loading About Book Image" 
                        style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div className={` ${styles.book_img_02} ${styles.book_img} `}>
                        <Image
                        src="/home/about-book-02.png"
                        fill
                        alt="Loading About Book Image" 
                        style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div className={` ${styles.book_img_03} ${styles.book_img} `}>
                        <Image
                        src="/home/about-book-03.png"
                        fill
                        alt="Loading About Book Image" 
                        style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div className={styles.pen_img}>
                        <Image
                        src="/home/pen.png"
                        fill
                        alt="Loading Pen Image" 
                        style={{ objectFit: "contain" }}
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
