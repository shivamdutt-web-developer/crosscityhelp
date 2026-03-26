"use client";
import { useEffect } from 'react';

export default function ChatTrigger() {
  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Find the closest clickable element
      const target = e.target.closest('a, button, div[role="button"]');
      if (!target) return;

      // Check if it's in a Navbar or Footer (to be safe, we check for 'nav' and 'footer' tags)
      const isNavOrFooter = target.closest('nav, footer');
      if (isNavOrFooter) return;

      // Determine if it's an "empty" trigger
      const isBlankLink = target.tagName === 'A' && (
        target.getAttribute('href') === '#' || 
        target.getAttribute('href') === 'javascript:void(0)' || 
        !target.getAttribute('href')
      );
      
      const isContactLink = target.tagName === 'A' && (
        target.getAttribute('href') === '/contact' || 
        target.getAttribute('href')?.includes('/contact')
      );

      const isChatButton = target.tagName === 'BUTTON' && (
        target.innerText.toLowerCase().includes('chat') || 
        target.dataset.chat === 'true'
      ) || (target.tagName === 'A' && target.innerText.toLowerCase().includes('launch project'));

      // Specific for our brand cards which don't have links yet
      const isBrandCard = target.classList.contains('brand-card-trigger');

      if (isBlankLink || isChatButton || isBrandCard || isContactLink) {
        // Only open if it's genuinely "empty", explicitly for chat, or a contact link
        if (isBlankLink || target.dataset.chat === 'true' || isBrandCard || isContactLink) {
            if (window.jivo_api) {
                e.preventDefault();
                window.jivo_api.open();
            }
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return null;
}
