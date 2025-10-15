import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from "./OurStorySection.module.css"

export default function OurStorySection() {
  return (
    <section className={` ${styles.our_story_section} sec_padding`}>
      <div className="container">
        <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
                <div className={styles.sec_left}>
                    <Image 
                    src="/home/our-story-img.png"
                    fill 
                    alt="Loading Our Story Image"
                    style={{ objectFit: 'contain' }}
                    />
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className={styles.sec_right}>
                    <h2>
                        Let’s Make Your Story <span className="break_line"></span>
                        Known To The World.
                    </h2>
                    <p>
                        Publishing a book can feel overwhelming—between cover design, marketing, and building an audience; many authors feel like they need a team. That’s where Writers Central USA steps in; we’re your all-in-one solution, handling everything from editing to branding, so you’re never left wondering what comes next.
                        <br /><br />
                        When you work with us, you choose a partner who cares as much about your book as you do. We help you overcome hurdles, sidestep the common pitfalls, and maximize your book’s profits, ensuring the journey is smooth and enjoyable.
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
