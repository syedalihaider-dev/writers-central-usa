"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import styles from "./PortfolioSection.module.css";

const tabs = [
  { id: "author", title: "Author Website", folder: "/book-portfolio/author-website" },
  { id: "smm", title: "Social Media Marketing", folder: "/book-portfolio/smm" },
  { id: "book", title: "Book Publishing", folder: "/book-portfolio/book-publishing" },
  { id: "design", title: "Cover & Illustration", folder: "/book-portfolio/book-illustration" },
];

const makeImages = (folder) =>
  Array.from({ length: 8 }).map((_, i) => ({
    src: `${folder}/${String(i + 1).padStart(2, "0")}.webp`,
    alt: folder.split("/").pop() + ` image ${i + 1}`,
  }));

export default function PortfolioSection() {
  const [active, setActive] = useState(tabs[0].id);
  const panelsRef = useRef({});

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => Fancybox.destroy();
  }, []);

useEffect(() => {
  const panelEl = panelsRef.current[active];
  if (panelEl) {
    const focusable = panelEl.querySelector("a, button, img, [tabindex]");
    focusable?.focus?.({ preventScroll: true }); // ✅ stops auto-scroll
  }
}, [active]);


  return (
    <section className={`${styles.portfolio_section} sec_padding`}>
      <div className="container">
        <div className={`${styles.portfolio_top} text-center`}>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2>We Have Extensive Industry Experience</h2>
              <p>
                Success in the literary world goes beyond writing—it’s about branding, positioning, and visibility.
                <span className="break_line"></span>
                Our portfolio showcases the diverse services we offer to authors, ensuring they reach their target audience effectively.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.portfolio_content}>
          <ul className={styles.tabs} role="tablist" aria-label="Portfolio categories">
            {tabs.map((t, idx) => (
              <li key={t.id}>
                <button
                  role="tab"
                  aria-selected={active === t.id}
                  aria-controls={`panel-${t.id}`}
                  id={`tab-${t.id}`}
                  className={`${styles.tab_button} ${active === t.id ? styles.active : ""}`}
                  onClick={() => setActive(t.id)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight") {
                      setActive(tabs[(idx + 1) % tabs.length].id);
                    } else if (e.key === "ArrowLeft") {
                      setActive(tabs[(idx - 1 + tabs.length) % tabs.length].id);
                    } else if (e.key === "Enter" || e.key === " ") {
                      setActive(t.id);
                    }
                  }}
                >
                  {t.title}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.panels}>
            {tabs.map((t) => {
              const isOpen = active === t.id;
              const images = makeImages(t.folder);
              return (
                <div
                  key={t.id}
                  id={`panel-${t.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${t.id}`}
                  ref={(el) => (panelsRef.current[t.id] = el)}
                  className={`${styles.panel} ${isOpen ? styles.open : ""}`}
                >
                  <div className="row">
                    {images.map((img, i) => (
                      <div key={i} className="col-6 col-sm-6 col-md-3" style={{ padding: 8 }}>
                        <div className={styles.image_box}>
                          <a href={img.src} data-fancybox={t.id}>
                            <div className={styles.imgWrapper}>
                              <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 640px) 50vw, 25vw"
                                loading="lazy"
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}