'use client'
import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import { PHONE_NUMBER, DISPLAY_PHONE_NUMBER } from "@/config/config";
import styles from "./FooterForm.module.css";

export default function FooterForm() {
  return (
    <section className={`${styles.ft_form_section} sec_padding`}>
      <div className="container">
        <div className="row align-items-center">
            <div className="col-sm-12 col-md-5">
                <div className={styles.sec_left}>
                    <h2>Ready to Share <span className="break_line"></span>Your Story?</h2>
                    <p>
                        Have questions or ideas you’d like to explore? Let’s talk! We’re here to make publishing and promoting your book as easy as possible, and we’re just a click away. <br /><br />
                        Whether you’re looking for branding, editing, or a bit of everything, we’re excited to help you bring your book to life.
                    </p>
                    <div className="combo_btn">
                        <ActionButtons />
                    </div>
                    <div className={styles.call_btn}>
                        <div className={styles.img}>
                            <Image
                            src="/call-btn.png"
                            fill 
                            alt="Loading Icon"
                            style={{ objectFit: "contain" }}
                            />
                        </div>
                        <p>
                            Have Any Questions?
                            <a href={`tel:${PHONE_NUMBER}`}>{DISPLAY_PHONE_NUMBER}</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-7">
                <div className={styles.sec_right}>
                    <form action="">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className={styles.form_group}>
                                    <Image 
                                    src="/user-icon.png" 
                                    width={13} 
                                    height={13} 
                                    alt="Loading Icon" 
                                    style={{ objectFit: "contain" }}
                                    />
                                    <input type="text" name="name" placeholder="Name" required />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className={styles.form_group}>
                                    <Image 
                                    src="/envelop-icon.png" 
                                    width={13} 
                                    height={13} 
                                    alt="Loading Icon" 
                                    style={{ objectFit: "contain" }}
                                    />
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className={styles.form_group}>
                                    <Image 
                                    src="/phone-icon.png" 
                                    width={13} 
                                    height={13} 
                                    alt="Loading Icon" 
                                    style={{ objectFit: "contain" }}
                                    />
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className={styles.form_group}>
                                    <Image 
                                    src="/msg-icon.png" 
                                    width={13} 
                                    height={13} 
                                    alt="Loading Icon" 
                                    style={{ objectFit: "contain" }}
                                    />
                                    <textarea name="msg" placeholder="Project Details"></textarea>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="combo_btn">
                                    <button type="submit" className="mybtn btn_1">
                                        <div className="icon">
                                            <Image 
                                            src="/get-started-btn.png"
                                            alt="Get Started Icon"
                                            width={40}
                                            height={40}
                                            />
                                        </div>
                                        <div className="text">
                                            <span>Submit Now</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
