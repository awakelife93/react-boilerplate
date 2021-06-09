import { connectWrapper } from "../../redux";
import Layout from "./Layout";
import AdLayout from "./Ad";
import HeaderLayout from "./Header";
import BodyLayout from "./Body";
import BottomLayout from "./Bottom";

import {
  generateLayoutContainerStyle,
  generateBodyContainerStyle,
  generateBottomContainerStyle,
  generateHeaderContainerStyle,
  generateComponentStyle,
  showBottomContainer,
  showHeaderContainer,
  generateCommonContainerStyle,
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
  const isDarkMode = reduxStore.themeStore.isDarkMode;
  const isShowAdContainer = reduxStore.globalStore.isShowAdContainer;

  const layoutStyles = generateLayoutContainerStyle({ path }) ?? {};
  const commonStyles = generateCommonContainerStyle({ isDarkMode }) ?? {};
  const headerStyles = generateHeaderContainerStyle({ path, isDarkMode }) ?? {};
  const bodyStyles = generateBodyContainerStyle({ path, isDarkMode }) ?? {};
  const bottomStyles = generateBottomContainerStyle({ path, isDarkMode }) ?? {};
  const componentStyles = generateComponentStyle({ path, isDarkMode }) ?? {};
  return (
    <Layout layoutStyles={layoutStyles}>
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
