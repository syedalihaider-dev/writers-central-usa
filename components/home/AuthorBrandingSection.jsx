import Image from "next/image";
import styles from "./AuthorBrandingSection.module.css"

export default function AuthorBrandingSection() {
  return (
    <section className={` ${styles.author_branding_section} sec_padding`}>
    <Image
    src="/home/author-branding-bg.png"
    fill
    alt="Loading Section Background Image" 
    className={styles.section_bg}
    style={{ objectFit: "cover" }}
    />
      <div className="container">
        <div className={` ${styles.sec_top} text-center`}>        
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <h2>Your Name. Your Brand. Your Legacy.</h2>
                    <p className="mt-3 mb-0">
                        Craft a personal brand that readers remember long after they’ve finished the last page.
                        <span className="break_line"></span>
                        Why? Let us give you four good reasons:
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.sec_content}>
            <div className="row">
                <div className="col-sm-12 col-md-3">
                    <div className={styles.box}>
                        <div className={styles.img}>
                            <Image
                            src="/home/author-icon-01.png"
                            fill
                            style={{ objectFit: 'contain' }}
                            alt="Loading Author Icon"
                            />
                        </div>
                        <h5>Be <br />Recognized</h5>
                        <p className="scroll_block">
                            A unique brand helps readers instantly recognize your work, making your books stand out in stores and online.
                        </p>
                        <button type="button" className="popup-btn">
                            Get Started 
                            <Image
                            src="/home/arrow.png"
                            height={12}
                            width={13}
                            style={{ objectFit: 'contain' }}
                            alt="arrow"
                            />
                        </button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3">
                    <div className={styles.box}>
                        <div className={styles.img}>
                            <Image
                            src="/home/author-icon-02.png"
                            fill
                            style={{ objectFit: 'contain' }}
                            alt="Loading Author Icon"
                            />
                        </div>
                        <h5>Keep Your <br />Readers Engaged</h5>
                        <p className="scroll_block">
                            A well-developed brand gives readers more ways to connect with you, keeping them engaged between book releases.
                        </p>
                        <button type="button" className="popup-btn">
                            Get Started 
                            <Image
                            src="/home/arrow.png"
                            height={12}
                            width={13}
                            style={{ objectFit: 'contain' }}
                            alt="arrow"
                            />
                        </button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3">
                    <div className={styles.box}>
                        <div className={styles.img}>
                            <Image
                            src="/home/author-icon-03.png"
                            fill
                            style={{ objectFit: 'contain' }}
                            alt="Loading Author Icon"
                            />
                        </div>
                        <h5>become a <br />Thought Leader</h5>
                        <p className="scroll_block">
                            A strong brand can position you as a thought leader, opening doors to collaborations, interviews, and speaking opportunities.
                        </p>
                        <button type="button" className="popup-btn">
                            Get Started 
                            <Image
                            src="/home/arrow.png"
                            height={12}
                            width={13}
                            style={{ objectFit: 'contain' }}
                            alt="arrow"
                            />
                        </button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3">
                    <div className={styles.box}>
                        <div className={styles.img}>
                            <Image
                            src="/home/author-icon-04.png"
                            fill
                            style={{ objectFit: 'contain' }}
                            alt="Loading Author Icon"
                            />
                        </div>
                        <h5>build an Emotional <br />Connection</h5>
                        <p className="scroll_block">
                            Branding helps share your personality and values, allowing readers to connect with you on a deeper, more personal level.
                        </p>
                        <button type="button" className="popup-btn">
                            Get Started 
                            <Image
                            src="/home/arrow.png"
                            height={12}
                            width={13}
                            style={{ objectFit: 'contain' }}
                            alt="arrow"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
