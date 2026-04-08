'use client';

import { useEffect, useRef } from 'react';

export default function ScrollFadeObserver() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Check if browser supports scroll-timeline
    const supportsScrollTimeline = CSS.supports('animation-timeline', 'view()');
    
    if (supportsScrollTimeline) {
      // Browser supports scroll-timeline, no need for observer
      return;
    }

    // Fallback: Use Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          const delay = parseInt(element.dataset.delay || '0');
          
          if (entry.isIntersecting) {
            // Element is entering viewport
            setTimeout(() => {
              element.style.setProperty('--delay', delay.toString());
              element.classList.add('animate-in');
            }, delay);
          } else {
            // Element is leaving viewport
            element.classList.remove('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    // Observe all fade elements
    const fadeElements = document.querySelectorAll('.fadeOnScroll');
    fadeElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return null; // This component doesn't render anything
}