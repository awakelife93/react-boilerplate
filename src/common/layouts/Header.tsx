import { useEffect, useState } from "react";
import { HeaderContainer } from "../components/Conatainer";
import { login } from "../../api/PostAPI";
import { connectWrapper } from "../../redux";
import {
  clearLocalStorageItem,
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../core/storage";
import _ from "lodash";

const Header = () => {
  const [isLogin, setLoginState] = useState(false);

  useEffect(() => {
    const _isLogin = getLocalStorageItem("id");
    if (!_.isEmpty(_isLogin)) {
      setLoginState(true);
    }
  }, [isLogin]);

  const _login = async () => {
    const res = await login({ id: "test", password: "1234" });
    // todo: 서버에서 toeken 값 내려주고 그것에 대해 검사하기
    setLocalStorageItem(res);
    setLoginState(true);
  };

  const _logout = () => {
    clearLocalStorageItem();
    setLoginState(false);
  };

  return (
    <HeaderContainer>
      React Project
      {!isLogin && <button onClick={() => _login()}>로그인</button>}
      {isLogin && <button onClick={() => _logout()}>로그아웃</button>}
    </HeaderContainer>
  );
};

export default connectWrapper(Header);
