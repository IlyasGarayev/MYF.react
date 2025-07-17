// Utility helper functions

// Format date for display
export const formatDate = (dateString, lang = 'az') => {
  const date = new Date(dateString);
  
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  const locales = {
    az: 'az-AZ',
    en: 'en-US',
    ru: 'ru-RU'
  };
  
  return date.toLocaleDateString(locales[lang] || locales.az, options);
};

// Format number with locale
export const formatNumber = (number, lang = 'az') => {
  const locales = {
    az: 'az-AZ',
    en: 'en-US',
    ru: 'ru-RU'
  };
  
  return new Intl.NumberFormat(locales[lang] || locales.az).format(number);
};

// Truncate text
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Generate URL slug
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Get time ago string
export const getTimeAgo = (dateString, lang = 'az') => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const timeAgoTexts = {
    az: {
      today: 'Bu gün',
      yesterday: 'Dünən',
      daysAgo: (days) => `${days} gün əvvəl`,
      weeksAgo: (weeks) => `${weeks} həftə əvvəl`,
      monthsAgo: (months) => `${months} ay əvvəl`
    },
    en: {
      today: 'Today',
      yesterday: 'Yesterday',
      daysAgo: (days) => `${days} days ago`,
      weeksAgo: (weeks) => `${weeks} weeks ago`,
      monthsAgo: (months) => `${months} months ago`
    },
    ru: {
      today: 'Сегодня',
      yesterday: 'Вчера',
      daysAgo: (days) => `${days} дней назад`,
      weeksAgo: (weeks) => `${weeks} недель назад`,
      monthsAgo: (months) => `${months} месяцев назад`
    }
  };
  
  const texts = timeAgoTexts[lang] || timeAgoTexts.az;
  
  if (diffDays === 0) return texts.today;
  if (diffDays === 1) return texts.yesterday;
  if (diffDays < 7) return texts.daysAgo(diffDays);
  if (diffDays < 30) return texts.weeksAgo(Math.ceil(diffDays / 7));
  return texts.monthsAgo(Math.ceil(diffDays / 30));
};

// Validate email
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Validate phone number (Azerbaijan format)
export const validatePhone = (phone) => {
  const re = /^\+994\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;
  return re.test(phone);
};

// Get language flag emoji
export const getLanguageFlag = (lang) => {
  const flags = {
    az: '🇦🇿',
    en: '🇺🇸',
    ru: '🇷🇺'
  };
  return flags[lang] || flags.az;
};

// Get language name
export const getLanguageName = (lang) => {
  const names = {
    az: 'Azərbaycan',
    en: 'English',
    ru: 'Русский'
  };
  return names[lang] || names.az;
};

// Scroll to top
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Smooth scroll to element
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Debounce function
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

// Throttle function
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Check if element is in viewport
export const isElementInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Get responsive image src
export const getResponsiveImageSrc = (imagePath, size = 'medium') => {
  if (!imagePath) return '/images/placeholder-image.svg';
  
  const sizes = {
    small: '400x300',
    medium: '800x600',
    large: '1200x900'
  };
  
  // For demo purposes, return the placeholder image
  return imagePath;
};

// Generate pagination array
export const generatePaginationArray = (currentPage, totalPages, maxVisible = 5) => {
  const pages = [];
  const half = Math.floor(maxVisible / 2);
  
  let start = Math.max(1, currentPage - half);
  let end = Math.min(totalPages, start + maxVisible - 1);
  
  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1);
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  
  return pages;
};

// Local storage helpers
export const getFromLocalStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

export const setToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};

// URL helpers
export const buildUrl = (lang, path) => {
  return `/${lang}${path}`;
};

export const getCurrentLangFromUrl = () => {
  const pathname = window.location.pathname;
  const segments = pathname.split('/');
  const lang = segments[1];
  return ['az', 'en', 'ru'].includes(lang) ? lang : 'az';
};

// File size formatter
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Color utilities
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

export const rgbToHex = (r, g, b) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

export default {
  formatDate,
  formatNumber,
  truncateText,
  generateSlug,
  getTimeAgo,
  validateEmail,
  validatePhone,
  getLanguageFlag,
  getLanguageName,
  scrollToTop,
  scrollToElement,
  debounce,
  throttle,
  isElementInViewport,
  getResponsiveImageSrc,
  generatePaginationArray,
  getFromLocalStorage,
  setToLocalStorage,
  removeFromLocalStorage,
  buildUrl,
  getCurrentLangFromUrl,
  formatFileSize,
  hexToRgb,
  rgbToHex
};