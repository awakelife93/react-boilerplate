import _ from "lodash";
import { useHistory } from "react-router";

import { connectWrapper } from "../../redux";
import {
  RowContainer,
  ColumnContainer,
} from "../../common/components/Conatainer";
import { CommonLabel } from "../../common/components/Label";
import { InputBox } from "../../common/components/InputBox";
import { SubMitButton } from "../../common/components/Button";
import { login } from "../../api/PostAPI";
import { setLocalStorageItem } from "../../core";

/**
 * @description Login Component
 * @param props
 * @returns {Component}
 */

const LoginComponent = (props: any) => {
  const loginInfo = {
    id: "",
    password: "",
  };

  const history = useHistory();
  const _login = async () => {
    if (_.isEmpty(loginInfo["id"]) || _.isEmpty(loginInfo["password"])) {
      alert("로그인 정보를 다시 한번 확인 해주시기 바랍니다.");
      return false;
    }
    const res = await login(loginInfo);
    // todo: 서버에서 toeken 값 내려주고 그것에 대해 검사하기
    setLocalStorageItem(res);
    history.push("/");
  };

  const { componentStyles } = props;
  return (
    <RowContainer>
      <ColumnContainer>
        <RowContainer align-self={"flex-start"}>
          <CommonLabel {...componentStyles.COMMON_LABEL}>Email</CommonLabel>
        </RowContainer>
        <InputBox
          margin-bottom={"15px"}
          placeholder={"Email"}
          onChange={(e) => (loginInfo["id"] = e.target.value)}
        />
        <RowContainer align-self={"flex-start"}>
          <CommonLabel {...componentStyles.COMMON_LABEL}>Password</CommonLabel>
        </RowContainer>
        <InputBox
          margin-bottom={"15px"}
          placeholder={"Password"}
          type={"password"}
          onChange={(e) => (loginInfo["password"] = e.target.value)}
        />
        <SubMitButton
          {...componentStyles.SUB_MIT_BUTTON}
          margin={"10px"}
          onClick={_login}
        >
          로그인
        </SubMitButton>
      </ColumnContainer>
    </RowContainer>
  );
};

export default connectWrapper(LoginComponent);
