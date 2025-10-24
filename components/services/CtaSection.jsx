"use client";
import Image from "next/image";
import styles from "./CtaSection.module.css";
import ActionButtons from "@/components/ui/ActionButtons";

export default function CtaSection({ data }) {
  const { kicker, title, subtitle, description } = data;
  return (
    <section className={`${styles.cta_section} sec_padding`}>
      <div className={styles.cta_before}>
        <Image
          src="/services/cta-before.webp"
          alt="CTA Background Before"
          fill
          style={{ objectFit: "contain" }}
          className={styles.sec_before_img}
        />
      </div>
      <div className={styles.cta_after}>
        <Image
          src="/services/cta-after.webp"
          alt="CTA Background After"
          fill
          style={{ objectFit: "contain" }}
          className={styles.sec_after_img}
        />
      </div>
      <div className={`${styles.sec_content} text-center`}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h6>{kicker}</h6>
              <h2 className="primarytxt">{title}</h2>
              <h3>{subtitle}</h3>
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
