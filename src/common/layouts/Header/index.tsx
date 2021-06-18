import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import _ from "lodash";

import { RoutePath } from "../../../route/routes";
import { Container } from "../../components";
import {
  clearLocalStorageItem,
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../../core";
import { SignActionComponent, IconsActionComponent } from "./action";
import { modalContents } from "../Modal";

export default (props: any) => {
  const [isSignIn, setSignInState] = useState(false);

  useEffect(() => {
    const _isSignIn = getLocalStorageItem("token");
    if (!_.isEmpty(_isSignIn)) {
      setSignInState(true);
    }
  }, [isSignIn]);

  const history = useHistory();
  const _routePush = (route: string) => {
    history.push(route);
  };

  const _signOut = () => {
    clearLocalStorageItem();
    setSignInState(false);
    _routePush(RoutePath.MAIN);
  };

  const _darkMode = () => {
    const { setDarkModeAction, reduxStore } = props;

    if (_.isFunction(setDarkModeAction)) {
      const isDarkMode = reduxStore.themeStore.isDarkMode;
      setLocalStorageItem({ darkMode: !isDarkMode });
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
    setLocalStorageItem({ lng });
    i18n.changeLanguage(lng);
  };

  const _showTemplateModal = () => {
    const { showModalAction } = props;

    if (_.isFunction(showModalAction)) {
      showModalAction({
        isShowModal: true,
        children: modalContents.IntroduceLayout,
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
      <SignActionComponent
        isSignIn={isSignIn}
        _routePush={_routePush}
        _signOut={_signOut}
        componentStyles={componentStyles}
      />
    </Container.HeaderContainer>
  );
};
