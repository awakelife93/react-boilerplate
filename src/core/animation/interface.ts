export interface AnimationOption {
  delay?: number;
  duration?: number;
}

export interface MoveOption extends AnimationOption {
  direction: string;
  position: number;
  endPosition: number;
}
