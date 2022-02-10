import _ from "lodash";

type LocalStorageKeys = "token" | "lng" | "useTheme";

type LocalStorageItem = {
  [key in LocalStorageKeys]: string;
}

export const getLocalStorageItem = (key: LocalStorageKeys): string | null =>
  window.localStorage.getItem(key);

export const getLocalStorageItems = (
  keys: LocalStorageKeys[]
): LocalStorageItem => {
  const storageItems = {} as LocalStorageItem;

  _.forEach(keys, (key: LocalStorageKeys) => {
    const storageItem = getLocalStorageItem(key);

    if (storageItem !== null) {
      storageItems[key] = storageItem;
    }
  });

  return storageItems;
};

export const setLocalStorageItem = (item: LocalStorageItem): void => {
  const keys = Object.keys(item) as LocalStorageKeys[];

  _.forEach(keys, (key: LocalStorageKeys) => {
    window.localStorage.setItem(key, item[key]);
  });
};

export const removeLocalStorageItem = (key: LocalStorageKeys): void =>
  window.localStorage.removeItem(key);

export const removeLocalStorageItems = (keys: LocalStorageKeys[]): void => {
  _.forEach(keys, (key: LocalStorageKeys) => {
    removeLocalStorageItem(key);
  });
};

export const clearLocalStorageItem = (): void => window.localStorage.clear();
