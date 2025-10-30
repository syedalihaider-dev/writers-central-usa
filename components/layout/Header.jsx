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
            <nav className={`${styles.navbar} ${mobileMenu ? styles.active : ""}`}>
              <ul className={styles.menu}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li
                  className={`${styles.dropdown} ${
                    servicesOpen ? styles.open : ""
                  }`}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <span className={styles.dropdownToggle}>Services</span>
                  <ul className={styles.dropdownMenu}>
                    <li><Link href="/services/ghostwriting-writing-services">Ghostwriting Writing</Link></li>
                    <li><Link href="/services/book-editing-and-proofreading-services">Book Editing & Proofreading</Link></li>
                    <li><Link href="/services/book-cover-design-services">Book Cover Design</Link></li>
                    <li><Link href="/services/book-formatting-services">Book Formatting</Link></li>
                    <li><Link href="/services/book-publishing-services">Book Publishing</Link></li>
                    <li><Link href="/services/book-illustration-services">Book Illustration</Link></li>
                    <li><Link href="/services/book-marketing-services">Book Marketing</Link></li>
                    <li><Link href="/services/book-trailer-services">Book Trailer</Link></li>
                    <li><Link href="/services/book-printing-services">Book Printing</Link></li>
                  </ul>
                </li>
                <li
                  className={`${styles.dropdown} ${
                    authorOpen ? styles.open : ""
                  }`}
                  onMouseEnter={() => setAuthorOpen(true)}
                  onMouseLeave={() => setAuthorOpen(false)}
                >
                  <span className={styles.dropdownToggle}>Author Centric</span>
                  <ul className={styles.dropdownMenu}>
                    <li><Link href="/author-centric/author-website">Author Website</Link></li>
                    <li><Link href="/author-centric/social-media-marketing">Social Media Marketing</Link></li>
                    <li><Link href="/author-centric/author-profiling">Author Profiling</Link></li>
                    <li><Link href="/author-centric/author-branding">Press Release</Link></li>
                    <li><Link href="/author-centric/search-engine-optimization">Search Engine Optimization</Link></li>
                  </ul>
                </li>
                <li><Link href="/book-portfolio">Book Portfolio</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
              </ul>
            </nav>
          </div>
          <div className="col-auto d-flex align-items-center gap-3">
            <a href={`tel: ${PHONE_NUMBER}`} className={styles.callBtn}>
                <div className={styles.img}>
                    <Image 
                    src="/call-icon.png" 
                    fill 
                    alt="Loading Icon" 
                    style={{ objectFit: "contain" }} 
                    /> 
                </div>
                {DISPLAY_PHONE_NUMBER}
            </a>
            <button type="button" className="mybtn btn_2 chat">
                <div className="icon">
                    <Image 
                    src="/live-chat-btn.png" 
                    alt="Live Chat Icon" 
                    width={40} 
                    height={40} 
                    />
                </div>
                <div className="text">
                    <span>Live Chat</span>
                </div>
            </button>
            <button
              className={styles.mobileToggle}
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}