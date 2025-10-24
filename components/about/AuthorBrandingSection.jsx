"use client";
import Image from "next/image";
import styles from "../home/AuthorBrandingSection.module.css";

export default function AuthorBrandingSection({ data }) {
  const { title, intro, items } = data;

  return (
    <section className={`${styles.author_branding_section} sec_padding`}>
      <Image
        src="/layers-bg.png"
        alt="Background Image"
        fill
        style={{ objectFit: "cover" }}
        className={styles.section_bg}
      />
      <div className="container">
        <div className={`${styles.sec_top} text-center`}>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2>{title}</h2>
              <p className="mt-3 mb-0">{intro}</p>
            </div>
          </div>
        </div>
        <div className={styles.sec_content}>
          <div className="row">
            {items.map((item, index) => (
              <div className="col-sm-12 col-md-3" key={index}>
                <div className={styles.box}>
                  <div className={styles.img}>
                    <Image
                      src={item.icon}
                      fill
                      style={{ objectFit: "contain" }}
                      alt="Loading Icon"
                    />
                  </div>
                  <h5 dangerouslySetInnerHTML={{ __html: item.heading }} />
                  <p className="scroll_block">{item.text}</p>
                  <button type="button" className="popup-btn">
                    Get Started 
                    <Image
                      src="/home/arrow.png"
                      height={12}
                      width={13}
                      alt="arrow"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
