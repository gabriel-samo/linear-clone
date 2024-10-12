"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Button } from "@/components/button";

const cookieBannerName = "copyright-banner-dismissed";

export const CopyrightLinearBanner = () => {
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);

  useEffect(() => {
    const isCookieBannerDismissed = Cookies.get(cookieBannerName);
    if (!isCookieBannerDismissed) {
      setIsCookieBannerVisible(true);
    }
  }, []);

  const dismissCookie = () => {
    setIsCookieBannerVisible(false);
    Cookies.set(cookieBannerName, "true", { expires: 365 });
  };

  if (!isCookieBannerVisible) return null;

  return (
    <div className="fixed bottom-[4rem] right-[4rem] flex w-[65rem] max-w-[95%] items-start rounded-md border border-transparent-white p-8 text-[2rem] backdrop-blur-[12px]">
      <div className="space-y-3">
        <p>
          <strong>⚠️ NOTE:</strong> I am not affiliated with Linear in any way.
          All images, the name of Linear and their logo are copyrighted by
          Linear. This website is only intended for learning purposes and as a
          homage to Linear&apos;s great UI work 🙏
          <br />
          This is linear 2022 version.
        </p>
        <p>
          <Button href="https://linear.app" size="large" target="_blank">
            Visit Linear&apos;s website
          </Button>
        </p>
      </div>
      <button className="ml-8" onClick={dismissCookie}>
        ✕ <span className="sr-only">Dimiss copyright banner</span>
      </button>
    </div>
  );
};
