"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { PHONE_NUMBER, DISPLAY_PHONE_NUMBER } from "@/config/config";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [authorOpen, setAuthorOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Toggle dropdown (click) — works both desktop (no effect) and mobile
  const toggleServices = () => setServicesOpen((s) => !s);
  const toggleAuthor = () => setAuthorOpen((s) => !s);

  const closeMobile = () => {
    setMobileMenu(false);
    setServicesOpen(false);
    setAuthorOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <Link href="/" className={styles.logo}>
              <Image
                src="/logo.png"
                fill
                alt="Loading Brand Logo"
                fetchPriority="high"
                priority
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>

          <div className="col">
            {/* NAV PANEL */}
            <nav
              className={`${styles.navbar} ${mobileMenu ? styles.active : ""}`}
              // keep existing hover handlers for desktop
            >
              <ul className={styles.menu}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>

                {/* Services dropdown */}
                <li
                  className={`${styles.dropdown} ${
                    servicesOpen ? styles.open : ""
                  } ${mobileMenu ? styles.mobileDropdown : ""}`}
                  onMouseEnter={() => {
                    if (typeof window !== "undefined" && window.innerWidth > 991) {
                      setServicesOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (typeof window !== "undefined" && window.innerWidth > 991) {
                      setServicesOpen(false);
                    }
                  }}
                >
                  <span
                    className={styles.dropdownToggle}
                    role="button"
                    aria-expanded={servicesOpen}
                    onClick={(e) => {
                      // click toggles on mobile; prevent default on desktop accidental
                      if (window.innerWidth <= 991) {
                        e.preventDefault();
                        toggleServices();
                      }
                    }}
                  >
                    Services
                  </span>

                  {/* Desktop dropdownMenu remains absolute; mobile will display static & slide */}
                  <ul className={styles.dropdownMenu}>
                    <li>
                      <Link href="/services/ghostwriting-writing-services">Ghostwriting Writing</Link>
                    </li>
                    <li>
                      <Link href="/services/book-editing-and-proofreading-services">Book Editing & Proofreading</Link>
                    </li>
                    <li>
                      <Link href="/services/book-cover-design-services">Book Cover Design</Link>
                    </li>
                    <li>
                      <Link href="/services/book-formatting-services">Book Formatting</Link>
                    </li>
                    <li>
                      <Link href="/services/book-publishing-services">Book Publishing</Link>
                    </li>
                    <li>
                      <Link href="/services/book-illustration-services">Book Illustration</Link>
                    </li>
                    <li>
                      <Link href="/services/book-marketing-services">Book Marketing</Link>
                    </li>
                    <li>
                      <Link href="/services/book-trailer-services">Book Trailer</Link>
                    </li>
                    <li>
                      <Link href="/services/book-printing-services">Book Printing</Link>
                    </li>
                  </ul>
                </li>

                {/* Author Centric dropdown */}
                <li
                  className={`${styles.dropdown} ${
                    authorOpen ? styles.open : ""
                  } ${mobileMenu ? styles.mobileDropdown : ""}`}
                  onMouseEnter={() => {
                    if (typeof window !== "undefined" && window.innerWidth > 991) {
                      setAuthorOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (typeof window !== "undefined" && window.innerWidth > 991) {
                      setAuthorOpen(false);
                    }
                  }}
                >
                  <span
                    className={styles.dropdownToggle}
                    role="button"
                    aria-expanded={authorOpen}
                    onClick={(e) => {
                      if (window.innerWidth <= 991) {
                        e.preventDefault();
                        toggleAuthor();
                      }
                    }}
                  >
                    Author Centric
                  </span>
                  <ul className={styles.dropdownMenu}>
                    <li>
                      <Link href="/author-centric/author-website">Author Website</Link>
                    </li>
                    <li>
                      <Link href="/author-centric/social-media-marketing">Social Media Marketing</Link>
                    </li>
                    <li>
                      <Link href="/author-centric/author-profiling">Author Profiling</Link>
                    </li>
                    <li>
                      <Link href="/author-centric/author-branding">Press Release</Link>
                    </li>
                    <li>
                      <Link href="/author-centric/search-engine-optimization">Search Engine Optimization</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link href="/book-portfolio">Book Portfolio</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-auto d-flex align-items-center gap-3">
            <a href={`tel:${PHONE_NUMBER}`} className={styles.callBtn}>
              <div className={styles.img}>
                <Image src="/call-icon.png" fill alt="Loading Icon" style={{ objectFit: "contain" }} />
              </div>
              {DISPLAY_PHONE_NUMBER}
            </a>

            <button type="button" className="mybtn btn_2 chat">
              <div className="icon">
                <Image src="/live-chat-btn.png" alt="Live Chat Icon" width={40} height={40} />
              </div>
              <div className="text">
                <span>Live Chat</span>
              </div>
            </button>

            {/* Mobile toggle */}
            <button
              aria-label={mobileMenu ? "Close menu" : "Open menu"}
              className={`${styles.mobileToggle} ${mobileMenu ? styles.open : ""}`}
              onClick={() => setMobileMenu((m) => !m)}
            >
              {/* Hamburger lines (animated to X) */}
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </button>
          </div>
        </div>
      </div>

      {/* overlay for mobile (click to close) */}
      {mobileMenu && <div className={styles.mobileOverlay} onClick={closeMobile} aria-hidden="true" />}
    </header>
  );
}
