import Image from "next/image";
import styles from "./StorySection.module.css";
import ActionButtons from "@/components/ui/ActionButtons";

export default function StorySection({}) {

  return (
    <section className={` ${styles.story_section} sec_padding`}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-sm-12 col-md-6">
                    <div className={styles.sec_left}>
                        <h2>
                            From Idea to Execution – Conquer the Literary World Today
                        </h2>
                        <p>
                            Every great author has a story—one that extends beyond the pages of their books. Writers
                            Central USA is where creativity meets strategy, transforming writers into influential
                            brands. We don’t just help authors publish; we elevate their presence, build their audience,
                            and turn their words into legacies.
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
                            src="/star-img.png"
                            fill
                            alt="Loading Star Image" 
                            style={{ objectFit: "contain" }}
                            />
                        </div>
                        <div className={styles.img}>
                            <Image
                            src="/about/story-sec-left-img.png"
                            fill
                            alt="Loading Image" 
                            style={{ objectFit: "contain" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}