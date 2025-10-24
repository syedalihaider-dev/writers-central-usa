import styles from "./page.module.css";
import BannerSection from "@/components/about/BannerSection";
import PartnersSection from "@/components/home/PartnersSection";
import StorySection from "@/components/about/StorySection";
import ProcessSection from "@/components/about/ProcessSection";
import OurStorySection from "@/components/home/OurStorySection";
import AuthorBrandingSection from "@/components/about/AuthorBrandingSection";
import FaqsSection from "@/components/about/FaqsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FooterForm from "@/components/home/FooterForm";

export default function About() {

    const aboutBranding = {
    title: "Why Author Branding is Important",
    intro:
        "Craft a personal brand that readers remember long after they’ve finished the last page. Why? Let us give you four good reasons:",
    items: [
        {
        icon: "/about/author-icon-01.png",
        heading: "Authentic <br/>Positioning",
        text: "Your story isn’t just in your book—it’s in how you present yourself. We define your identity as an author and craft a brand that is both authentic and compelling.",
        },
        {
        icon: "/about/author-icon-02.png",
        heading: "Reader <br/>Engagement",
        text: "Your audience wants to know the person behind the pages. We build reader connections that last, fostering loyalty and trust through strategic branding.",
        },
        {
        icon: "/about/author-icon-03.png",
        heading: "Author <br/>Recognition",
        text: "Visibility is key. Our branding and marketing strategies ensure that your name stands out, helping you grow your audience and increase book sales.",
        },
        {
        icon: "/about/author-icon-04.png",
        heading: "Global <br/>Presence",
        text: "Your words deserve a worldwide audience. We position you across digital platforms, ensuring that your books and brand reach readers across the globe.",
        },
    ],
    };

  return (
    <div className={styles.AboutPage}>
        <BannerSection />
        <PartnersSection />
        <StorySection />
        <ProcessSection />
        <OurStorySection />
        <AuthorBrandingSection data={aboutBranding} />
        <FaqsSection />
        <TestimonialsSection />
        <FooterForm />
    </div>
  );
}
