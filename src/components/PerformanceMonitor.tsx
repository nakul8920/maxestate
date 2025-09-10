import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      // This would be used with web-vitals library if installed
      return;
    }

    // Basic performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.loadEventStart);
        }
        
        if (entry.entryType === 'paint') {
          const paintEntry = entry as PerformancePaintTiming;
          if (paintEntry.name === 'first-contentful-paint') {
            console.log('First Contentful Paint:', paintEntry.startTime);
          }
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['navigation', 'paint'] });
    } catch (e) {
      // Fallback for browsers that don't support PerformanceObserver
      console.log('Performance monitoring not supported');
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
