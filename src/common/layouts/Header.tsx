import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import _ from "lodash";

import { HeaderContainer, RowContainer } from "../components/Conatainer";
import { TextButton } from "../components/Button";
import Icon from "../components/Icon";
import { connectWrapper } from "../../redux";
import { clearLocalStorageItem, getLocalStorageItem } from "../../core/storage";
import { RoutePath } from "../../route/routes";

const HeaderComponent = (props: any) => {
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

  const _DarkMode = () => {
    const { themeAction, reduxStore } = props;

    if (_.isFunction(themeAction)) {
      const isDarkMode = reduxStore.themeStore.isDarkMode;
      themeAction(!isDarkMode);
    }
  };

  const { layoutStyles, componentStyles } = props;
  return (
    <HeaderContainer {...layoutStyles}>
      <RowContainer align-items={"center"} padding={"20px"}>
        <TextButton
          {...componentStyles.TEXT_BUTTON}
          font-size={"35px"}
          onClick={() => _routePush("/")}
        >
          React Project
        </TextButton>
        <Icon.FaList
          style={{ marginLeft: 20, cursor: "pointer" }}
          size={20}
          onClick={() => _routePush(RoutePath.CONTENTS)}
        />
        <Icon.IoIosFlashlight
          style={{ marginLeft: 20, cursor: "pointer" }}
          size={20}
          onClick={() => _DarkMode()}
        />
      </RowContainer>
      {isLogin === false && (
        <TextButton
          {...componentStyles.TEXT_BUTTON}
          onClick={() => _routePush(RoutePath.LOGIN)}
        >
          로그인
        </TextButton>
      )}
      {isLogin === true && (
        <TextButton {...componentStyles.TEXT_BUTTON} onClick={() => _logout()}>
          로그아웃
        </TextButton>
      )}
    </HeaderContainer>
  );
};

export default connectWrapper(HeaderComponent);
