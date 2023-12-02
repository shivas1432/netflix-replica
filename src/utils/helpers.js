// Utility functions for Netflix replica
export const truncateString = (str, length = 150) => {
  if (str?.length > length) {
    return str.substring(0, length) + "...";
  }
  return str;
};

export const formatRuntime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
};

export const getRandomMovie = (movies) => {
  return movies[Math.floor(Math.random() * movies.length)];
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
