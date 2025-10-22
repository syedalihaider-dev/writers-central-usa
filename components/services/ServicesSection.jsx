"use client";
import styles from "./ServicesSection.module.css";
import ActionButtons from "@/components/ui/ActionButtons";
import Image from "next/image";

export default function ServicesSection({ data }) {
  if (!data) return null;

  const { highlight, title, description, steps = [], image } = data;

  return (
    <section className={`${styles.services_section} sec_padding`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6">
            <div className={styles.sec_left}>
              <h2>
                <span className="primarytxt">{highlight}</span> {title}
              </h2>
              <p className="mb-0">{description}</p>
              <ul>
                {steps.map((step, i) => (
                  <li key={i}>
                    <div className={styles.box}>
                      <div className={styles.head}>
                        <div className={styles.img}>
                          <Image 
                          src={step.icon} 
                          alt={step.title} 
                          fill 
                          className="myImages" 
                          />
                        </div>
                        <h6>{step.title}</h6>
                      </div>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="combo_btn">
                <ActionButtons />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className={styles.sec_right}>
              <Image 
              src={image} 
              alt="Services Illustration" 
              fill 
              className="myImages" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
