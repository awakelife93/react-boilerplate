import React from "react";

export interface ILayout {}

export interface IComponent {
  // * 단순 HTML을 Return 하는 경우를 대비하여 - ReactElement
  // * 컴포넌트 객체를 던질 경우를 대비하여 - FC
  children?: React.ReactElement;
}
