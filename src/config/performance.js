// Performance optimization configurations
export const PERFORMANCE_CONFIG = {
  // Image loading optimization
  IMAGE_LOADING: {
    LAZY_THRESHOLD: '50px',
    PLACEHOLDER_COLOR: '#1a1a1a',
    FADE_DURATION: 300
  },
  
  // API caching
  CACHE_CONFIG: {
    MOVIE_CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
    SEARCH_CACHE_DURATION: 2 * 60 * 1000, // 2 minutes
    MAX_CACHE_SIZE: 100
  },
  
  // Search optimization
  SEARCH_CONFIG: {
    DEBOUNCE_DELAY: 300,
    MIN_SEARCH_LENGTH: 2,
    MAX_RESULTS: 20
  },
  
  // Animation settings
  ANIMATION_CONFIG: {
    HOVER_SCALE: 1.05,
    TRANSITION_DURATION: '0.3s',
    EASING: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  }
};

// Performance monitoring
export const trackPerformance = (metricName, startTime) => {
  const endTime = performance.now();
  const duration = endTime - startTime;
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`⚡ ${metricName}: ${duration.toFixed(2)}ms`);
  }
  
  return duration;
};
