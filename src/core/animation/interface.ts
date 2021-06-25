import React from "react";

export interface AnimationOptionIE {
  delay?: number;
  duration?: number;
  style?: any;
}

export interface MoveOptionIE extends AnimationOptionIE {
  direction: string;
  position: number;
  endPosition: number;
}

export interface CommonAnimationReturnIE {
  ref: React.MutableRefObject<any>;
  style: any;
}
