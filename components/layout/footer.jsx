import Image from "next/image";
// import Link from "link/image";
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <section className={styles.footer}>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-4">
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
                <div className="col-sm-12 col-md-4">
                    <div className={styles.ft_menu}>
                        <h4>Quick links</h4>
                        <ul className={ft_links}>
                            <li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
