// app/author-centric/[slug]/page.jsx
import styles from "./page.module.css";
import { BannerSection, ProcessSection, CtaSection, FaqsSection } from "@/components/author-centric/";
import PartnersSection from "@/components/home/PartnersSection";
import AuthorBrandingSection from "@/components/home/AuthorBrandingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FooterForm from "@/components/home/FooterForm";
import { authorData } from "@/data/authorData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(authorData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const service = authorData[params.slug];

  if (!service) {
    return {
      title: "Service Not Found | Writers Central USA",
      description: "The requested author service could not be found.",
      alternates: {
        canonical: "https://www.writerscentralusa.com/author-centric",
      },
    };
  }

  return {
    title: service.seoTitle || service.title || `${service.title}`,
    description: service.seoDescription || service.intro || "",
    alternates: {
      canonical: `https://www.writerscentralusa.com/author-centric/${params.slug}`,
    },
  };
}

export default function AuthorCentric({ params }) {
  const service = authorData[params.slug];

  // Option A: show a simple message (you had this earlier)
  if (!service) return <h1>Service Not Found</h1>;

  // Option B (recommended): use Next's notFound() to return 404 page
  // if (!service) notFound();

  return (
    <div className={`${styles.author_page} ${params.slug}`}>
      <BannerSection data={service.banner} />
      <PartnersSection />
      <ProcessSection data={service.process} />
      <CtaSection data={service.cta} />
      <AuthorBrandingSection data={service.authorBranding} />
      <FaqsSection data={service.faqsData} />
      <TestimonialsSection />
      <FooterForm />
    </div>
  );
}