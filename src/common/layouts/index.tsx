import { connectWrapper } from "../../redux";
import Layout from "./Layout";
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
} from "../styles";

/**
 * Layout (최상단 컴포넌트)
 * @param props
 * @returns {React.FC}
 * @description
 * 라우팅이 되거나, Store의 데이터 감지를 통해 스타일을 제작하여 전체에게 뿌린다.
 */
const _Layout = (props: any) => {
  const { reduxStore, path, Component } = props;
  const isDarkMode = reduxStore.themeStore.isDarkMode;
  const layoutStyles = generateLayoutContainerStyle({ path });
  const headerStyles = generateHeaderContainerStyle({ path, isDarkMode });
  const bodyStyles = generateBodyContainerStyle({ path, isDarkMode });
  const bottomStyles = generateBottomContainerStyle({ path, isDarkMode });
  const componentStyles = generateComponentStyle({ path, isDarkMode });
  return (
    <Layout layoutStyles={layoutStyles}>
      {showHeaderContainer(path) && (
        <HeaderLayout
          {...props}
          layoutStyles={headerStyles}
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
