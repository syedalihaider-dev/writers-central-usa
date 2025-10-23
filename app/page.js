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

  const homeBranding = {
    title: "Your Name. Your Brand. Your Legacy.",
    intro: "Craft a personal brand that readers remember long after they’ve finished the last page.",
    items: [
      {
        icon: "/home/author-icon-01.png",
        alt: "Be Recognized",
        heading: "Be <br/>Recognized",
        text: "A unique brand helps readers instantly recognize your work, making your books stand out.",
        cta: "Get Started"
      },
      {
        icon: "/home/author-icon-02.png",
        alt: "Keep Readers Engaged",
        heading: "Keep Your <br/>Readers Engaged",
        text: "A well-developed brand keeps readers engaged between releases.",
        cta: "Get Started"
      },
      {
        icon: "/home/author-icon-03.png",
        alt: "Thought Leader",
        heading: "Become a <br/>Thought Leader",
        text: "Position yourself as a thought leader with a powerful author brand.",
        cta: "Get Started"
      },
      {
        icon: "/home/author-icon-04.png",
        alt: "Emotional Connection",
        heading: "Build an Emotional <br/>Connection",
        text: "Let your readers connect with you on a deeper, personal level.",
        cta: "Get Started"
      }
    ]
  };

  return (
    <div className={styles.HomePage}>
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <ServicesSection />
      <OurStorySection />
      <AuthorBrandingSection data={homeBranding} />
      <ClientStoriesSection />
      <TestimonialsSection />
      <FooterForm />
    </div>
  );
}
