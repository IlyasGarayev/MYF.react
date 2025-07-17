import { useEffect, useRef, useState } from 'react';

// Custom hook for scroll-based animations using Intersection Observer
export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
    ...options
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (defaultOptions.triggerOnce) {
            setHasAnimated(true);
          }
        } else if (!defaultOptions.triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: defaultOptions.threshold,
        rootMargin: defaultOptions.rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [defaultOptions.threshold, defaultOptions.rootMargin, defaultOptions.triggerOnce]);

  // Stop observing if animation has been triggered once
  useEffect(() => {
    if (hasAnimated && defaultOptions.triggerOnce) {
      const element = elementRef.current;
      if (element) {
        // We could disconnect observer here, but it's handled in cleanup
      }
    }
  }, [hasAnimated, defaultOptions.triggerOnce]);

  return [elementRef, isVisible];
};

// Hook for multiple scroll animations
export const useMultipleScrollAnimations = (count, options = {}) => {
  const refs = useRef([]);
  const [visibleStates, setVisibleStates] = useState(new Array(count).fill(false));

  // Initialize refs array
  if (refs.current.length !== count) {
    refs.current = Array(count).fill().map((_, i) => refs.current[i] || { current: null });
  }

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
    staggerDelay: 100, // Delay between animations in ms
    ...options
  };

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref.current) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleStates(prev => {
                const newStates = [...prev];
                newStates[index] = true;
                return newStates;
              });
            }, index * defaultOptions.staggerDelay);
          } else if (!defaultOptions.triggerOnce) {
            setVisibleStates(prev => {
              const newStates = [...prev];
              newStates[index] = false;
              return newStates;
            });
          }
        },
        {
          threshold: defaultOptions.threshold,
          rootMargin: defaultOptions.rootMargin
        }
      );

      observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [count, defaultOptions.threshold, defaultOptions.rootMargin, defaultOptions.triggerOnce, defaultOptions.staggerDelay]);

  return [refs.current, visibleStates];
};

// Hook for scroll-triggered counters
export const useScrollCounter = (endValue, options = {}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const animationRef = useRef(null);

  const defaultOptions = {
    threshold: 0.5,
    duration: 2000, // Animation duration in ms
    startValue: 0,
    ...options
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Start counter animation
          const startTime = performance.now();
          const startValue = defaultOptions.startValue;
          const difference = endValue - startValue;

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / defaultOptions.duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(startValue + (difference * easeOut));
            
            setCount(currentValue);

            if (progress < 1) {
              animationRef.current = requestAnimationFrame(animate);
            }
          };

          animationRef.current = requestAnimationFrame(animate);
        }
      },
      {
        threshold: defaultOptions.threshold
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [endValue, isVisible, defaultOptions.threshold, defaultOptions.duration, defaultOptions.startValue]);

  return [elementRef, count, isVisible];
};

// Hook for scroll progress
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(Math.min(Math.max(currentProgress, 0), 100));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return progress;
};

// Hook for navbar scroll behavior
export const useNavbarScroll = (threshold = 100) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past threshold
      setIsScrolled(currentScrollY > threshold);
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, threshold]);

  return { isScrolled, scrollDirection };
};

// Hook for parallax effect
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * speed;
      
      setOffset(rate);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return [elementRef, offset];
};

export default {
  useScrollAnimation,
  useMultipleScrollAnimations,
  useScrollCounter,
  useScrollProgress,
  useNavbarScroll,
  useParallax
};