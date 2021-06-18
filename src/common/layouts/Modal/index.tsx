import { useEffect } from "react";
import _ from "lodash";
import { Container, Icon } from "../../components";
import { removeBodyScroll, revertBodyScroll } from "../../../utils";

import IntroduceLayout from "./IntroduceLayout";
import MessageLayout from "./MessageLayout";

export const modalContents = {
  IntroduceLayout,
  MessageLayout,
};

export const _showModalAction = ({
  next,
  type,
  item,
}: {
  next: Function;
  type: "SAMPLE" | "MESSAGE";
  item: {
    childrenProps?: any;
    style?: any;
    option?: {
      dimClose?: boolean;
      keyClose?: boolean;
    };
  };
}): void => {
  if (_.isFunction(next)) {
    let children: React.FC<any>;
    switch (type) {
      case "SAMPLE":
        children = modalContents.IntroduceLayout;
        break;
      case "MESSAGE":
        children = modalContents.MessageLayout;
        break;
      default:
        // todo: common layout 하나 따기
        children = modalContents.MessageLayout;
        break;
    }

    next({
      isShowModal: true,
      children,
      childrenProps: item.childrenProps,
      style: item.style,
      option: item.option,
    });
  }
};

export default (props: any) => {
  const { childrenProps, layoutStyles, componentStyles, style, option } = props;

  useEffect(() => {
    removeBodyScroll();

    if (option.keyClose === true) {
      window.addEventListener("keydown", checkKeydown);
    }

    return () => {
      if (option.keyClose === true) {
        window.removeEventListener("keydown", checkKeydown);
      }
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            position: "absolute",
            top: 20,
            left: 20,
            cursor: "pointer",
          }}
          size={30}
          onClick={() => _closeModal()}
        />
        <Container.LayoutContainer style={{ padding: 30 }}>
          <props.children
            {...childrenProps}
            componentStyles={componentStyles}
          />
        </Container.LayoutContainer>
      </Container.LayoutContainer>
    </Container.LayoutContainer>
  );
};
