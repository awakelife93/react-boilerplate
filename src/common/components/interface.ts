import { CSSProperties } from "styled-components";

export interface CommonComponentIE extends CSSProperties {
  style?: CSSProperties;
  requireStyle?: CSSProperties;
}

export interface PagingIE {
  target: {
    ref: React.MutableRefObject<any>;
    callback: Function | null;
    page: number;
  };
  observer?: {
    threshold?: number;
  };
}
