import { useState, useEffect, useRef } from "react";
import { MoveOption } from "./interface";

/**
 * @description
 * Component가 Unmount할 때 까지 특정 딜레이 주기로 포지션 이동 Animation
 */
export default (
  option: MoveOption = {
    delay: 500,
    direction: "Y",
    position: 10,
    endPosition: 15,
    style: {},
  }
) => {
  const component: any = useRef();
  const [animationObject, setAnimationObject] = useState({
    isMove: false,
    position: option.position,
  });

  const move = () => {
    if (animationObject.isMove === false) {
      setAnimationObject({
        isMove: true,
        position: option.endPosition,
      });
    } else {
      setAnimationObject({
        isMove: false,
        position: option.position,
      });
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (component.current) {
      timeoutId = setTimeout(() => move(), option.delay);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [animationObject.isMove]);

  return {
    ref: component,
    style: {
      transform: `translate${option.direction}(${animationObject.position}px)`,
      ...option.style,
    },
  };
};
