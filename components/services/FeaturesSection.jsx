"use client";
import Image from "next/image";
import styles from "./FeaturesSection.module.css";

export default function FeaturesSection({ data }) {
  const { highlight, title, description, boxes } = data;

  // Fixed 3 images for box_after
  const afterImages = [
    "/services/vector-star.png",
    "/services/vector-circle.png",
    "/services/vector-cube.png",
  ];

  return (
    <section className={`${styles.features_section} sec_padding`}>
      <div className={styles.features_before}>
        <Image 
        src="/services/feature-before.png" 
        fill 
        alt="Features Before" 
        />
      </div>
      <div className={styles.features_after}>
        <Image 
        src="/services/feature-after.png" 
        fill 
        alt="Features After" 
        />
      </div>
      <div className="container">
        <div className={`${styles.sec_top} text-center`}>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-7">
              <h2>
                <span className="primarytxt">{highlight}</span>{" "}
                <span className="break_line"></span> {title}
              </h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className={styles.sec_content}>
          <div className="row">
            {boxes.map((box, i) => (
              <div className="col-sm-12 col-md-4" key={i}>
                <div className={styles.box}>
                  <div className={styles.box_after}>
                    <Image 
                      src={afterImages[i]} 
                      fill 
                      alt={`Box ${i + 1} After`} 
                    />
                  </div>
                  <div className={styles.icon}>
                    <Image 
                    src={box.icon} 
                    fill 
                    alt={`${box.title} Icon`} 
                    />
                  </div>
                  <h6>{box.title}</h6>
                  <p className="scroll_block">{box.text}</p>
                  <a href="javascript:;" className="popup_btn">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
                      <path
                        d="M14 6.13815C14.2604 5.8778 14.2604 5.45569 14 5.19534L9.75741 0.952702C9.49706 0.692353 9.07495 0.692353 8.8146 0.952702C8.55425 1.21305 8.55425 1.63516 8.8146 1.89551L12.5858 5.66675L8.8146 9.43798C8.55425 9.69833 8.55425 10.1204 8.8146 10.3808C9.07495 10.6411 9.49706 10.6411 9.75741 10.3808L14 6.13815ZM0.195312 5.66675L0.195313 6.33341L13.5286 6.33341L13.5286 5.66675L13.5286 5.00008L0.195312 5.00008L0.195312 5.66675Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
