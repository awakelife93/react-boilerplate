import _ from "lodash";
import { useHistory } from "react-router";

import { Container, Label, InputBox, Button } from "../../common/components";
// import { CommonLabel } from "../../common/components/Label";
// import { InputBox } from "../../common/components/InputBox";
// import { SubMitButton } from "../../common/components/Button";
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
    <Container.RowContainer>
      <Container.ColumnContainer>
        <Container.RowContainer
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Label.CommonLabel style={{ ...componentStyles.COMMON_LABEL }}>
            Email
          </Label.CommonLabel>
        </Container.RowContainer>
        <InputBox.CommonInputBox
          style={{
            padding: 5,
            marginBottom: 15,
          }}
          placeholder={"Email"}
          onChange={(e) => (loginInfo["id"] = e.target.value)}
        />
        <Container.RowContainer
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Label.CommonLabel style={{ ...componentStyles.COMMON_LABEL }}>
            Password
          </Label.CommonLabel>
        </Container.RowContainer>
        <InputBox.CommonInputBox
          style={{
            padding: 5,
            marginBottom: 15,
          }}
          placeholder={"Password"}
          type={"password"}
          onChange={(e) => (loginInfo["password"] = e.target.value)}
        />
        <Button.SubMitButton
          style={{
            ...componentStyles.SUB_MIT_BUTTON,
            margin: 10,
          }}
          onClick={_login}
        >
          로그인
        </Button.SubMitButton>
      </Container.ColumnContainer>
    </Container.RowContainer>
  );
};
