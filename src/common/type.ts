export type UnknownObject<type = unknown> = Record<string, type>;

export type ThemeItem = {
  [index: string]: {
    LAYOUT?: any;
    COMPONENT?: any;
  };
}