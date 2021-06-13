export interface AnimationOption {
  delay?: number;
  duration?: number;
  style?: any;
}

export interface MoveOption extends AnimationOption {
  direction: string;
  position: number;
  endPosition: number;
}
