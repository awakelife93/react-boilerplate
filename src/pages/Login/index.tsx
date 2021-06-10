import _ from "lodash";
import { useHistory } from "react-router";

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

export default (props: any) => {
  const loginInfo = {
    id: "",
    password: "",
  };

  const history = useHistory();
  const _login = async () => {
    alert("API 서버 개발 완료하면 붙일 예정입니다.");
    return false;

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
        <RowContainer
          style={{
            alignSelf: "flex-start",
          }}
        >
          <CommonLabel style={{ ...componentStyles.COMMON_LABEL }}>
            Email
          </CommonLabel>
        </RowContainer>
        <InputBox
          style={{
            padding: "5px",
            marginBottom: "15px",
          }}
          placeholder={"Email"}
          onChange={(e) => (loginInfo["id"] = e.target.value)}
        />
        <RowContainer
          style={{
            alignSelf: "flex-start",
          }}
        >
          <CommonLabel style={{ ...componentStyles.COMMON_LABEL }}>
            Password
          </CommonLabel>
        </RowContainer>
        <InputBox
          style={{
            padding: "5px",
            marginBottom: "15px",
          }}
          placeholder={"Password"}
          type={"password"}
          onChange={(e) => (loginInfo["password"] = e.target.value)}
        />
        <SubMitButton
          style={{
            ...componentStyles.SUB_MIT_BUTTON,
            margin: "10px",
          }}
          onClick={_login}
        >
          로그인
        </SubMitButton>
      </ColumnContainer>
    </RowContainer>
  );
};
