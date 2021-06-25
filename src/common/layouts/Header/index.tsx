import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import _ from "lodash";

import { RoutePath } from "../../../route/routes";
import { Container } from "../../components";
import { SignMenu, IconsMenu } from "./action";
import { signOut } from "../../../api/PostAPI";
import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
} from "../../../core";
import { ComponentIE } from "../../interface";

/**
 * @description Header Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const Header: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const {
    layoutStyles,
    componentStyles,
    reduxStore: { globalStore, themeStore, userStore },
  } = props;

  const history = useHistory();
  const _routePush = (route: string) => {
    history.push(route);
  };

  const _signOut = async () => {
    const { initUserInfoAction } = props;

    try {
      const token = getLocalStorageItem("token");

      if (!_.isEmpty(token)) {
        await signOut();
        // token 삭제
        removeLocalStorageItem("token");
        // 리덕스 초기화
        initUserInfoAction();
        _routePush(RoutePath.MAIN);
      }
    } catch (e) {
      console.log("_signOut Error", e);
    }
  };

  const _darkMode = () => {
    const { setDarkModeAction } = props;

    if (_.isFunction(setDarkModeAction)) {
      const isDarkMode = themeStore.isDarkMode;
      setLocalStorageItem({ darkMode: !isDarkMode });
      setDarkModeAction(!isDarkMode);
    }
  };

  const _showAdContainer = () => {
    const { showAdAction } = props;

    if (_.isFunction(showAdAction)) {
      const isShowAdContainer = globalStore.isShowAdContainer;
      showAdAction(!isShowAdContainer);
    }
  };

  const { i18n } = useTranslation();
  const _setLaunage = (lng: string) => {
    setLocalStorageItem({ lng });
    i18n.changeLanguage(lng);
  };

  const _showTemplateModal = () => {
    if (_.isFunction(window.globalFunc.showModalAction)) {
      window.globalFunc.showModalAction({
        type: "SAMPLE",
        item: {
          style: {
            width: 500,
            height: 300,
            borderRadius: 25,
            padding: 20,
          },
        },
      });
    }
  };

  return (
    <Container.HeaderContainer style={{ ...layoutStyles }}>
      <IconsMenu
        isShowAdContainer={globalStore.isShowAdContainer}
        _routePush={_routePush}
        _darkMode={_darkMode}
        _showAdContainer={_showAdContainer}
        _setLaunage={_setLaunage}
        _showTemplateModal={_showTemplateModal}
        componentStyles={componentStyles}
      />
      <SignMenu
        userInfo={userStore}
        _routePush={_routePush}
        _signOut={_signOut}
        componentStyles={componentStyles}
      />
    </Container.HeaderContainer>
  );
};

export default Header;
