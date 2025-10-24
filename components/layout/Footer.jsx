import Image from "next/image";
import Link from "next/link";
import { PHONE_NUMBER, DISPLAY_PHONE_NUMBER, EMAIL_ADDRESS } from "@/config/config";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={styles.footer}>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <div className={styles.ft_list_1}>
                        <h2>
                            Digital PR fuels your <strong>brand’s growth</strong> and online presence.
                        </h2>
                        <ul className={styles.social_media}>
                            <li>
                                <a href="#!">
                                    <Image 
                                    src="/facebook-icon.png" 
                                    width={10} 
                                    height={20}
                                    alt="Loading Icon"
                                    style={{ objectFit: 'contain' }} 
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <Image 
                                    src="/linkedin-icon.png" 
                                    width={18} 
                                    height={18}
                                    alt="Loading Icon"
                                    style={{ objectFit: 'contain' }} 
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <Image 
                                    src="/instagram-icon.png" 
                                    width={20} 
                                    height={20}
                                    alt="Loading Icon"
                                    style={{ objectFit: 'contain' }} 
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <Image 
                                    src="/x-icon.png" 
                                    width={20} 
                                    height={18}
                                    alt="Loading Icon"
                                    style={{ objectFit: 'contain' }} 
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md-2">
                    <div className={styles.ft_menu}>
                        <h4>Quick links</h4>
                        <ul className={styles.ft_links}>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about-us">About Us</Link>
                            </li>
                            <li>
                                <Link href="/book-portfolio">Book Portfolio</Link>
                            </li>
                            <li>
                                <Link href="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3">
                    <div className={styles.ft_menu}>
                        <h4>Services</h4>
                        <ul className={styles.ft_links}>
                            <li>
                                <Link href="/author-website">Author Website</Link>
                            </li>
                            <li>
                                <Link href="/social-media-marketing">Social Media Marketing</Link>
                            </li>
                            <li>
                                <Link href="/author-profiling">Author Profiling</Link>
                            </li>
                            <li>
                                <Link href="/author-branding">Author Branding</Link>
                            </li>
                            <li>
                                <Link href="/seo-marketing">SEO Marketing</Link>
                            </li>
                            <li>
                                <Link href="/book-marketing">Book Marketing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md-2">
                    <div className={styles.ft_menu}>
                        <h4>Contact Us</h4>
                        <ul className={styles.ft_info}>
                            <li>
                                <p>
                                    EMAIL US : <br />
                                    <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    PHONE : <br />
                                    <a href={`tel:${PHONE_NUMBER}`}>{DISPLAY_PHONE_NUMBER}</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.main_ft}>
            <div className="container border-0">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.ft_left}>
                            <ul>
                                <li>
                                    <Link href="/privacy-policy" target="_blank">Privacy Policy</Link>
                                </li>
                                <li>|</li>
                                <li>
                                    <Link href="/terms-and-conditions" target="_blank">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.ft_right}>
                            <p>
                                <Image src="/copy-right-icon.png" width={21} height={20} alt="Loading Icon" /> 
                                2025 <span> Writers Central USA. </span> All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
