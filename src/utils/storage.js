// Utility functions for localStorage management
export const getStoredData = (key, defaultValue) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading from localStorage for key ${key}:`, error);
    return defaultValue;
  }
};

export const setStoredData = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing to localStorage for key ${key}:`, error);
  }
};

export const STORAGE_KEYS = {
  USERS: 'storeRatingUsers',
  STORES: 'storeRatingStores',
  RATINGS: 'storeRatingRatings',
  CURRENT_USER: 'storeRatingCurrentUser'
};

