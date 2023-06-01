"use client";
import { useState, useEffect } from "react";

const MOBILE_SIZE = 480;
const TABLET_SIZE = 768;

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDeviceType({
        isMobile: width <= MOBILE_SIZE,
        isTablet: width > MOBILE_SIZE && width <= TABLET_SIZE,
        isDesktop: width > TABLET_SIZE,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
};
