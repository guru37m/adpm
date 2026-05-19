import { useState, useEffect } from "react";

export const useUrgencyPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was already closed in this session
    const popupClosed = sessionStorage.getItem('adpm-popup-closed');
    if (popupClosed) {
      setHasShown(true);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    let scrollThreshold = false;

    // Desktop: exit intent + 20s timer
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !showPopup) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    // Mobile: 50% scroll
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 50 && !scrollThreshold && !hasShown && !showPopup) {
        scrollThreshold = true;
        setShowPopup(true);
        setHasShown(true);
      }
    };

    // 20s timer for desktop
    const isMobile = window.innerWidth < 768;
    if (!isMobile && !hasShown) {
      timeoutId = setTimeout(() => {
        if (!hasShown && !showPopup) {
          setShowPopup(true);
          setHasShown(true);
        }
      }, 20000);
    }

    // Add event listeners
    if (!isMobile) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown, showPopup]);

  const closePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem('adpm-popup-closed', 'true');
  };

  return {
    showPopup,
    closePopup
  };
};