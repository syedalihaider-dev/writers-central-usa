'use client';
import Image from "next/image";

export default function ActionButtons() {
  return (
    <>
      <button type="button" className="mybtn btn_1 popup_btn">
        <div className="icon">
          <Image 
            src="/get-started-btn.png"
            alt="Get Started Icon"
            width={40}
            height={40}
          />
        </div>
        <div className="text">
          <span>Get Started</span>
        </div>
      </button>

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
    </>
  );
}
