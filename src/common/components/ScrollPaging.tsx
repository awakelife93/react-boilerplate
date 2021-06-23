import _ from "lodash";
import { useCallback, useEffect, useRef } from "react";
import { Container } from ".";

/**
 * @description
 * Scroll을 감지하여 Paging
 */
export default (props: any) => {
  const {
    option: {
      target: { callback, skip },
    },
  } = props;

  const component: any = useRef<HTMLDivElement>();

  const onPagingEnd = useCallback(
    ([entry]: any) => {
      // ref가 화면에 완전히 표시 될때 (threshold === 1)
      if (entry.isIntersecting) {
        try {
          if (_.isFunction(callback)) {
            callback();
          }
        } catch (e) {
          console.log("Paging Callback Error", e);
        }
      }
    },
    [skip]
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    if (component.current) {
      observer = new IntersectionObserver(onPagingEnd, {
        threshold: 1,
      });
      observer.observe(component.current);
    }

    return () => observer && observer.disconnect();
  }, [onPagingEnd]);

  return (
    <Container.LayoutContainer ref={component}>
      {props.children}
    </Container.LayoutContainer>
  );
};
