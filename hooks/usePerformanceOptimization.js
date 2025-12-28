'use client';

import { useEffect, useState } from 'react';

export const usePerformanceOptimization = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero poster image
      const heroImg = new Image();
      heroImg.src = 'https://images.pexels.com/photos/1181338/pexels-photo-1181338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';
      
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
      
      setIsLoaded(true);
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadCriticalResources);
    } else {
      setTimeout(preloadCriticalResources, 100);
    }
  }, []);

  return { isLoaded };
};

export const prefetchRoute = (href) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

export const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
  return img;
};