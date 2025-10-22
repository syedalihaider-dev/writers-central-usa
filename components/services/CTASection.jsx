import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";

export default function CTASection() {
return (
<section className={styles.author_section}>
    <Image
    src="/author-banner-bg.png"
    alt="Author Bg Image"
    fill
    style={{ objectFit: "cover" }}
    className={styles.bannerBg}
    />
    <div className={styles.sec_left}>
        <div className={styles.img}>
            <Image 
            src="/author-left-img.png" 
            alt="Authors Image" 
            fill 
            className="myImage" 
            />
        </div>
    </div>
    <div className="container">
        <div className="row justify-content-end">
            <div className="col-sm-12 col-md-6">
                <div className={styles.sec_right}>
                    <h2>
                        <span className="primarytxt">We offer industry leading publishing services for all </span>
                        <span className="break_line"></span> of your book writing needs
                    </h2>
                    <p>
                        Have any queries regarding our award-winning services? Connect with us now via live chat or call.
                    </p>
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
