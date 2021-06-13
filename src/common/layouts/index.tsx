import { connectWrapper } from "../../redux";

import Layout from "./Layout";
import AdLayout from "./Ad";
import HeaderLayout from "./Header";
import BodyLayout from "./Body";
import BottomLayout from "./Bottom";
import ModalLayout from "./Modal";

import {
  generateLayoutContainerStyle,
  generateBodyContainerStyle,
  generateBottomContainerStyle,
  generateHeaderContainerStyle,
  generateComponentStyle,
  showBottomContainer,
  showHeaderContainer,
  generateCommonContainerStyle,
  generateModalContainerStyle,
} from "../styles";

/**
 * Layout (최상단 컴포넌트)
 * @param {redux} props
 * @returns {React.FC}
 * @description
 * 라우팅이 되거나, Store의 데이터 감지를 통해 스타일을 제작하여 전체에게 뿌린다.
 * 해당 컴포넌트만 Redux에 연결하여 props로 자식 컴포넌트 전체 (페이지)에 뿌린다.
 * 그 외에 독립되는 컴포넌트는 connectWrapper로 연결
 */
const _Layout = (props: any) => {
  const { reduxStore, path, Component } = props;

  const modalItem = reduxStore.globalStore.modalItem;
  const isDarkMode = reduxStore.themeStore.isDarkMode;
  const isShowAdContainer = reduxStore.globalStore.isShowAdContainer;

  /**
   * @description
   * generateStyle
   * Styled Component에 props 데이터에 맞춰서 상응하는 렌더링이 되게끔 구현하려 했지만,
   * 앞으로 늘어날 props 데이터를 기존에 사용중인 컴포넌트들마다 확장하기가 쉽지 않은 것 같고 불편해이기도 하고,
   * Styled Component에 다양한 렌더링 방식이 작성되어 복잡성이 올라갈까봐 따로 함수형으로 구현하여 확장성을 고려하였음,
   */

  /**
   * common layout style
   * @function layoutStyles path에 따라 수정이 가능한 스타일
   * @function commonStyles 수정이 불가능한 스타일
   */
  const layoutStyles = generateLayoutContainerStyle({ path }) ?? {};
  const commonStyles = generateCommonContainerStyle({ isDarkMode }) ?? {};

  /**
   * modal layout style
   * @function modalStyles 따로 수정이 가능하게끔 확장해둔 형태
   */
  const modalStyles = generateModalContainerStyle({ isDarkMode }) ?? {};

  /**
   * header, body, bottom styles
   * @function headerStyles 수정이 가능한 스타일
   * @function bodyStyles 수정이 가능한 스타일
   * @function bottomStyles 수정이 가능한 스타일
   */
  const headerStyles = generateHeaderContainerStyle({ path, isDarkMode }) ?? {};
  const bodyStyles = generateBodyContainerStyle({ path, isDarkMode }) ?? {};
  const bottomStyles = generateBottomContainerStyle({ path, isDarkMode }) ?? {};

  /**
   * component styles
   * @function componentStyles 수정이 가능한 스타일
   */
  const componentStyles = generateComponentStyle({ path, isDarkMode }) ?? {};
  return (
    <Layout layoutStyles={layoutStyles}>
      {modalItem.isShowModal && (
        <ModalLayout
          {...props}
          layoutStyles={commonStyles}
          componentStyles={componentStyles}
          children={modalItem.children}
          style={{ ...modalStyles, ...modalItem.style }}
          option={modalItem.option}
        />
      )}
      {showHeaderContainer(path) && (
        <HeaderLayout
          {...props}
          layoutStyles={headerStyles}
          componentStyles={componentStyles}
        />
      )}
      {isShowAdContainer && (
        <AdLayout
          {...props}
          layoutStyles={commonStyles}
          componentStyles={componentStyles}
        />
      )}
      <BodyLayout layoutStyles={bodyStyles}>
        <Component {...props} componentStyles={componentStyles} />
      </BodyLayout>
      {showBottomContainer(path) && (
        <BottomLayout
          {...props}
          layoutStyles={bottomStyles}
          componentStyles={componentStyles}
        />
      )}
    </Layout>
  );
};

export default connectWrapper(_Layout);
