import _ from "lodash";

export const getLocalStorageItem = (key: string): string | null => {
  return window.localStorage.getItem(key);
};

export const setLocalStorageItem = (item: any): void => {
  _.forEach(Object.keys(item), (key) => {
    window.localStorage.setItem(key, item[key]);
  });
};

export const removeLocalStorageItem = (key: string): void =>
  window.localStorage.removeItem(key);

export const clearLocalStorageItem = (): void => window.localStorage.clear();
