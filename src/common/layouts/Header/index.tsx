import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import _ from "lodash";

import { RoutePath } from "../../../route/routes";
import { Container } from "../../components";
import {
  clearLocalStorageItem,
  getLocalStorageItem,
} from "../../../core/storage";
import { LoginOutActionComponent, IconsActionComponent } from "./action";

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
    const { darkModeAction, reduxStore } = props;

    if (_.isFunction(darkModeAction)) {
      const isDarkMode = reduxStore.themeStore.isDarkMode;
      darkModeAction(!isDarkMode);
    }
  };

  const _showAdContainer = () => {
    const { adAction, reduxStore } = props;

    if (_.isFunction(adAction)) {
      const isShowAdContainer = reduxStore.globalStore.isShowAdContainer;
      adAction(!isShowAdContainer);
    }
  };

  const _setLaunage = (launage: any) => {
    // todo: 작업 예정
    console.log("lauange: ", launage);
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
