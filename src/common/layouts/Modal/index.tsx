import { useEffect } from "react";
import _ from "lodash";
import { Container, Icon } from "../../components";
import { removeBodyScroll, revertBodyScroll } from "../../../utils";

import Introduce from "./Introduce";
export const modalContents = {
  Introduce,
};

export default (props: any) => {
  const { layoutStyles, componentStyles, style, option } = props;

  useEffect(() => {
    removeBodyScroll();
    window.addEventListener("keydown", checkKeydown);

    return () => {
      window.removeEventListener("keydown", checkKeydown);
      revertBodyScroll();
    };
  });

  const checkKeydown = (event: any) => {
    if (_.isString(event.code) && event.code === "Escape") {
      _closeModal();
    }
  };

  const _closeModal = () => {
    const { initShowModalAction } = props;

    if (_.isFunction(initShowModalAction)) {
      initShowModalAction();
    }
  };

  return (
    <Container.LayoutContainer>
      {/* dim area */}
      <Container.LayoutContainer
        style={{
          ...layoutStyles,
          position: "fixed",
          opacity: 0.5,
          zIndex: 1,
        }}
        onClick={() => {
          if (option.dimClose === true) _closeModal();
        }}
      />
      {/* modal area */}
      <Container.LayoutContainer
        style={{
          ...layoutStyles,
          ...style,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          zIndex: 2,
        }}
      >
        <Icon.IoCloseCircleOutline
          style={{
            ...componentStyles.ICON,
            cursor: "pointer",
          }}
          size={30}
          onClick={() => _closeModal()}
        />
        <Container.LayoutContainer style={{ padding: 30 }}>
          <props.children componentStyles={componentStyles} />
        </Container.LayoutContainer>
      </Container.LayoutContainer>
    </Container.LayoutContainer>
  );
};
