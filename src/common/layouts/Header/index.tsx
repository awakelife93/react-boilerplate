import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import _ from "lodash";

import { RoutePath } from "../../../route/routes";
import { Container } from "../../components";
import {
  clearLocalStorageItem,
  getLocalStorageItem,
} from "../../../core/storage";
import { LoginOutActionComponent, IconsActionComponent } from "./action";
import { modalContents } from "../Modal";

export default (props: any) => {
  const [isLogin, setLoginState] = useState(false);

  useEffect(() => {
    const _isLogin = getLocalStorageItem("id");
    if (!_.isEmpty(_isLogin)) {
      setLoginState(true);
    }
  }, [isLogin]);

  const history = useHistory();
  const _routePush = (route: string) => {
    history.push(route);
  };

  const _logout = () => {
    clearLocalStorageItem();
    setLoginState(false);
    _routePush(RoutePath.MAIN);
  };

  const _darkMode = () => {
    const { setDarkModeAction, reduxStore } = props;

    if (_.isFunction(setDarkModeAction)) {
      const isDarkMode = reduxStore.themeStore.isDarkMode;
      setDarkModeAction(!isDarkMode);
    }
  };

  const _showAdContainer = () => {
    const { showAdAction, reduxStore } = props;

    if (_.isFunction(showAdAction)) {
      const isShowAdContainer = reduxStore.globalStore.isShowAdContainer;
      showAdAction(!isShowAdContainer);
    }
  };

  const { i18n } = useTranslation();
  const _setLaunage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const _showTemplateModal = () => {
    const { showModalAction, reduxStore } = props;

    if (_.isFunction(showModalAction)) {
      const isShowModal = reduxStore.globalStore.modalItem.isShowModal;
      showModalAction({
        isShowModal: !isShowModal,
        children: modalContents.Introduce,
        style: {
          width: 500,
          height: 300,
          borderRadius: 25,
          padding: 20,
        },
        option: {
          dimClose: true,
        },
      });
    }
  };

  const { layoutStyles, componentStyles, reduxStore } = props;
  return (
    <Container.HeaderContainer style={{ ...layoutStyles }}>
      <IconsActionComponent
        isShowAdContainer={reduxStore.globalStore.isShowAdContainer}
        _routePush={_routePush}
        _darkMode={_darkMode}
        _showAdContainer={_showAdContainer}
        _setLaunage={_setLaunage}
        _showTemplateModal={_showTemplateModal}
        componentStyles={componentStyles}
      />
      <LoginOutActionComponent
        isLogin={isLogin}
        _routePush={_routePush}
        _logout={_logout}
        componentStyles={componentStyles}
      />
    </Container.HeaderContainer>
  );
};
