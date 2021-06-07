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

  const { style } = props;
  return (
    <HeaderContainer {...style}>
      <RowContainer align-items={"center"} padding={"20px"}>
        <TextButton font-size={"35px"} onClick={() => _routePush("/")}>
          React Project
        </TextButton>
        <Icon.FaList
          style={{ marginLeft: 20, cursor: "pointer" }}
          size={20}
          onClick={() => _routePush(RoutePath.CONTENTS)}
        />
        <Icon.FaList
          style={{ marginLeft: 20, cursor: "pointer" }}
          size={20}
          onClick={() => alert("개발중")}
        />
      </RowContainer>
      {isLogin === false && (
        <TextButton onClick={() => _routePush(RoutePath.LOGIN)}>
          로그인
        </TextButton>
      )}
      {isLogin === true && (
        <TextButton onClick={() => _logout()}>로그아웃</TextButton>
      )}
    </HeaderContainer>
  );
};

export default connectWrapper(HeaderComponent);
