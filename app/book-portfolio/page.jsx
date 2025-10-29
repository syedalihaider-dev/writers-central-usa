import styles from "./page.module.css";
import BannerSection from "@/components/book-portfolio/BannerSection"
import PartnersSection from "@/components/home/PartnersSection";
import PortfolioSection from "@/components/book-portfolio/PortfolioSection";
import FooterForm from "@/components/home/FooterForm";

export default function Portfolio() {
  return (
    <div className={styles.PortfolioPage}>
      <BannerSection />
      <PartnersSection />
      <PortfolioSection />
      <FooterForm />
    </div>
  );
}
