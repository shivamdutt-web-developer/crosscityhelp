"use client";
import { useEffect } from 'react';

export default function ChatTrigger() {
  useEffect(() => {
      // Check if it's in a Navbar (Header) or Footer
      const isNavOrFooter = target.closest('nav, footer') || target.closest('header') || target.closest('.z-50'); // Added .z-50 for TopBar

      const isBlankLink = target.tagName === 'A' && (
        target.getAttribute('href') === '#' || 
        target.getAttribute('href') === 'javascript:void(0)' || 
        !target.getAttribute('href')
      );

      // If it's NOT in Nav/Footer, trigger for EVERYTHING
      if (!isNavOrFooter) {
        if (window.jivo_api) {
          e.preventDefault();
          window.jivo_api.open();
        }
        return;
      }

      // If it IS in Nav/Footer, only trigger for BLANK links (like social icons)
      if (isBlankLink) {
        if (window.jivo_api) {
          e.preventDefault();
          window.jivo_api.open();
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return null;
}
