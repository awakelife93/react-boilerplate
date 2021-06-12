import { useCallback, useEffect, useRef } from "react";
import { AnimationOption } from "./interface";

/**
 * @description
 * Scroll을 감지하여 FadeIn Animation
 */
export default (
  option: AnimationOption = {
    delay: 0,
    duration: 1,
  }
) => {
  const component: any = useRef();

  const onScroll = useCallback(
    ([entry]: any) => {
      const { current } = component;
      if (entry.isIntersecting) {
        current.style.transitionDuration = `${option.duration}s`;
        current.style.transitionDelay = `${option.delay}s`;
        current.style.opacity = 1;
      }
    },
    [option.delay, option.duration]
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    if (component.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(component.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: component,
    style: { opacity: 0 },
  };
};
