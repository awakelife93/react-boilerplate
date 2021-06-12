import { useEffect } from "react";
import _ from "lodash";
import { Container, Icon } from "../../components";
import { removeBodyScroll, revertBodyScroll } from "../../../utils";

/**
 * ModalContents로 따로 빼내주기
 */
import Introduce from "./Introduce";
export const modalContents = {
  Introduce,
};

/**
 * todo: Styled Component로 모달 레이아웃 따기.
 */
export default (props: any) => {
  const { layoutStyles, componentStyles, initShowModalAction, style } = props;

  useEffect(() => {
    removeBodyScroll();

    return () => {
      revertBodyScroll();
    };
  });

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
          position: "fixed", // 필수
          opacity: 0.5, // ContainerStyle로 받기
          zIndex: 1, // 필수
        }}
      />
      {/* modal area */}
      <Container.LayoutContainer
        style={{
          ...layoutStyles,
          ...style,
          border: "1px solid white", // 다크모드 고려해서 받기
          borderRadius: 25, // WrapperStyle에 받기
          position: "absolute", // 필수
          transform: "translate(-50%, -50%)", // 필수
          top: "50%", // 필수
          left: "50%", // 필수
          padding: 20, // WrapperStyle에 받기
          zIndex: 2, // 필수
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
