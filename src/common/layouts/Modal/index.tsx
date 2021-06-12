import { useEffect } from "react";
import _ from "lodash";
import { Container, Icon } from "../../components";
import {
  initModalStatus,
  removeBodyScroll,
  revertBodyScroll,
} from "../../../utils";

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
  const { layoutStyles, componentStyles, showModalAction, style } = props;

  useEffect(() => {
    removeBodyScroll();

    return () => {
      revertBodyScroll();
    };
  });

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
          onClick={() => {
            if (_.isFunction(showModalAction)) {
              showModalAction(initModalStatus());
            }
          }}
        />
        <Container.LayoutContainer style={{ padding: 30 }}>
          <props.children componentStyles={componentStyles} />
        </Container.LayoutContainer>
      </Container.LayoutContainer>
    </Container.LayoutContainer>
  );
};
