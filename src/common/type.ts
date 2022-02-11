export type UnknownObject<T = unknown> = Record<string, T>;

export type ThemeItem = {
  [index: string]: {
    LAYOUT?: any;
    COMPONENT?: any;
  };
};
