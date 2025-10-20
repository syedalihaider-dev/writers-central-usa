import styles from "./page.module.css";
import HeroSection from "@/components/home/HeroSection"
import PartnersSection from "@/components/home/PartnersSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import OurStorySection from "@/components/home/OurStorySection";
import AuthorBrandingSection from "@/components/home/AuthorBrandingSection";
import ClientStoriesSection from "@/components/home/ClientStoriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FooterForm from "@/components/home/FooterForm";

export default function Home() {
  return (
    <div className={styles.HomePage}>
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <ServicesSection />
      <OurStorySection />
      <AuthorBrandingSection />
      <ClientStoriesSection />
      <TestimonialsSection />
      <FooterForm />
    </div>
  );
}
