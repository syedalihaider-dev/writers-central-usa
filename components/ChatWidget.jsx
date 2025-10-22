"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.$zopim) {
        clearInterval(interval);

        // Click trigger for all elements with .chat class
        const chatButtons = document.querySelectorAll(".chat");
        chatButtons.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            window.$zopim.livechat.window.toggle();
          });
        });

        console.log("Zendesk Chat connected ✅");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ✅ Proper Zendesk script load using Next.js Script */}
      <Script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=4338bf84-3cf8-46ef-9cd1-996399dc7b9d"
        strategy="afterInteractive"
        onError={(e) => console.error("Zendesk script failed to load", e)}
      />
    </>
  );
}
