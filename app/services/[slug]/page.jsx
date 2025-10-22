import { servicesData } from "@/data/servicesData";
import styles from "./page.module.css";
import { BannerSection, ProcessSection } from "@/components/services/";
import PartnersSection from "@/components/home/PartnersSection";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const service = servicesData[params.slug];

  if (!service) {
    return {
      title: "Service Not Found | Book Publishing Services io",
      description: "The requested service could not be found.",
      alternates: {
        canonical: "https://www.writerscentralusa.com/services",
      },
    };
  }
  return {
    title:
      service.seoTitle ||
      `${service.banner.title}`,
    description:
      service.seoDescription ||
      service.banner.description,
    alternates: {
      canonical: `https://www.writerscentralusa.com/services/${params.slug}`,
    },
  };
}

export default function ServicePage({ params }) {
  const service = servicesData[params.slug];
  if (!service) return <h1>Service Not Found</h1>;
  return (
    <div className={`${styles.services_page} ${params.slug}`}>
      <BannerSection data={service.banner} />
      <PartnersSection />
      <ProcessSection data={service.process} />
    </div>
  );
}
