import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "../components/Conatainer";
import { connectWrapper } from "../../redux";
import { clearLocalStorageItem, getLocalStorageItem } from "../../core/storage";
import _ from "lodash";

const HeaderComponent = (props: any) => {
  const [isLogin, setLoginState] = useState(false);

  useEffect(() => {
    const _isLogin = getLocalStorageItem("id");
    if (!_.isEmpty(_isLogin)) {
      setLoginState(true);
    }
  }, [isLogin]);

  const history = useHistory();
  const _login = () => {
    history.push("/login");
  };

  const _logout = () => {
    clearLocalStorageItem();
    setLoginState(false);
    history.push("/");
  };

  return (
    <HeaderContainer>
      React Project
      {!isLogin && <button onClick={() => _login()}>로그인</button>}
      {isLogin && <button onClick={() => _logout()}>로그아웃</button>}
    </HeaderContainer>
  );
};

export default connectWrapper(HeaderComponent);
