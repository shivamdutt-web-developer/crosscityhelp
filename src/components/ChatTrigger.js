"use client";
import { useEffect } from 'react';

export default function ChatTrigger() {
  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Find the closest clickable element (links, buttons, or custom triggers)
      const target = e.target.closest('a, button, [role="button"], .brand-card-trigger');
      if (!target) return;

      // Check if it's in a Navbar (Header) or Footer
      const isNavOrFooter = target.closest('nav, footer') || target.closest('header');
      if (isNavOrFooter) return;

      // Intercept the click and open JivoChat
      if (window.jivo_api) {
        e.preventDefault();
        window.jivo_api.open();
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return null;
}
