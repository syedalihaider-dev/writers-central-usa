import styles from "./page.module.css";
import BannerSection from "@/components/contact/BannerSection";
import PartnersSection from "@/components/home/PartnersSection";
import FooterForm from "@/components/home/FooterForm";

export default function Contact() {
  return (
    <div className={styles.ContactPage}>
        <BannerSection />
        <PartnersSection />
        <FooterForm />
    </div>
  );
}
