import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  onError,
  priority = false,
  placeholder = '/placeholder.svg',
  sizes = '100vw'
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Load images 100px before they come into view
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    if (onError) {
      onError(e);
    }
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-gray-300 border-t-primary rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      
      {/* Actual image */}
      {isInView && (
        <img
          src={hasError ? placeholder : src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
          style={{
            willChange: 'opacity, transform'
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
