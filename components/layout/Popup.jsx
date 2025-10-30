"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Popup.module.css";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const ipRes = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipRes.json();

      const locationRes = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
      const locationData = await locationRes.json();

      const payload = {
        ...formData,
        formType: "Popup Form",
        pageUrl: window.location.href,
        userIp: ipData.ip,
        userCity: locationData.city || "Unknown City",
        userCountry: locationData.country_name || "Unknown Country",
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsOpen(false);
        window.location.href = "/thank-you";
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };

  useEffect(() => {
  function handleClick(e) {
    const btn = e.target && e.target.closest ? e.target.closest(".popup_btn") : null;
    if (btn) {
      e.preventDefault();
      setIsOpen(true);
    }
  }

  document.addEventListener("click", handleClick);
  return () => {
    document.removeEventListener("click", handleClick);
  };
}, []);


  return (
    <>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <Image
              src="/popup/popup-bg.png"
              alt="Banner Bg Image"
              fill
              style={{ objectFit: "cover" }}
              className={styles.PopupBg}
            />
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
            <div className={styles.popup_left}>
              <h2>
                Contact <span>Our Team.</span>
              </h2>
              <p>
                Get in touch with us to avail our industry-leading Amazon
                publishing services. Please Fill Out the Form Below:
              </p>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className={styles.form_group}>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6">
                    <div className={styles.form_group}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-12">
                    <div className={styles.form_group}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+00 89 1285212"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-12">
                    <div className={styles.form_group}>
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Leave us a message..."
                      />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-12">
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
              </form>
            </div>
            <div className={styles.popup_right}>
              <div className={styles.popup_right_img}>
                <Image
                  src="/popup/popup-right-img.png"
                  alt="Popup Right Image"
                  fill
                  style={{ objectFit: "contain" }}
                  className={styles.PopupBg}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}