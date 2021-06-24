import { useEffect } from "react";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { Container, InputBox, Label, Button } from "../../common/components";
import { _showModalAction } from "../../common/layouts/Modal";
import { ComponentIE } from "../../common/interface";

import { setLocalStorageItem, I18nCommandEnum } from "../../core";
import { validationObject } from "../../utils";

import { signUp } from "../../api/PostAPI";
import { UserInfoIE } from "../../api/interface";
import { RoutePath } from "../../route/routes";

/**
 * @description SignUp Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const signUpInfo = {
  email: "",
  nickname: "",
  password: "",
  confirm_password: "",
};
export default (props: ComponentIE): React.ReactElement => {
  const { componentStyles } = props;
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener("keypress", checkKeyPress);
    return () => window.removeEventListener("keypress", checkKeyPress);
  });

  const checkKeyPress = (event: any) => {
    if (_.isString(event.code) && event.code === "Enter") {
      _signUp();
    }
  };

  const history = useHistory();
  const _signUp = async () => {
    const { setUserInfoAction } = props;

    if (validationObject(signUpInfo)) {
      _showMessageModal("회원가입 정보를 다시 한번 확인 해주시기 바랍니다.");
      return false;
    }

    if (signUpInfo.confirm_password !== signUpInfo.password) {
      _showMessageModal("패스워드를 확인해주시기 바랍니다.");
      return false;
    }

    try {
      const userInfo: UserInfoIE = await signUp(signUpInfo);

      if (_.isUndefined(userInfo)) {
        _showMessageModal("회원가입 정보를 다시 한번 확인 해주시기 바랍니다.");
        return false;
      } else {
        setLocalStorageItem({ token: userInfo.token });
        setUserInfoAction({
          isLogin: true,
          info: { email: userInfo.email, nickname: userInfo.nickname },
        });
        history.push(RoutePath.MAIN);
      }
    } catch (e) {
      switch (e.status) {
        case 409: {
          _showMessageModal(
            "중복된 이메일이 있습니다. 다른 이메일을 사용해주시기 바랍니다."
          );
          return false;
        }
      }
    }
  };

  const _showMessageModal = (message: string) => {
    if (_.isFunction(window.globalFunc.showModalAction)) {
      window.globalFunc.showModalAction({
        type: "MESSAGE",
        item: {
          childrenProps: { message },
        },
      });
    }
  };

  return (
    <Container.RowContainer>
      <Container.ColumnContainer>
        <Container.RowContainer
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Label.CommonLabel style={{ ...componentStyles.COMMON_LABEL }}>
            {t(I18nCommandEnum.EMAIL)}
          </Label.CommonLabel>
        </Container.RowContainer>
        <InputBox.CommonInputBox
          style={{
            padding: 5,
            marginBottom: 15,
          }}
          placeholder={t(I18nCommandEnum.EMAIL)}
          onChange={(e) => (signUpInfo["email"] = e.target.value)}
        />

        <Container.RowContainer
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Label.CommonLabel style={{ ...componentStyles.COMMON_LABEL }}>
            {t(I18nCommandEnum.NICKNAME)}
          </Label.CommonLabel>
        </Container.RowContainer>
        <InputBox.CommonInputBox
          style={{
            padding: 5,
            marginBottom: 15,
          }}
          placeholder={t(I18nCommandEnum.NICKNAME)}
          onChange={(e) => (signUpInfo["nickname"] = e.target.value)}
        />

        <Container.RowContainer
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Label.CommonLabel style={{ ...componentStyles.COMMON_LABEL }}>
            {t(I18nCommandEnum.PASSWORD)}
          </Label.CommonLabel>
        </Container.RowContainer>
        <InputBox.CommonInputBox
          style={{
            padding: 5,
            marginBottom: 15,
          }}
          type={"password"}
          placeholder={t(I18nCommandEnum.PASSWORD)}
          onChange={(e) => (signUpInfo["password"] = e.target.value)}
        />

        <Container.RowContainer
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Label.CommonLabel style={{ ...componentStyles.COMMON_LABEL }}>
            {t(I18nCommandEnum.CONFIRM_PASSWORD)}
          </Label.CommonLabel>
        </Container.RowContainer>
        <InputBox.CommonInputBox
          style={{
            padding: 5,
            marginBottom: 15,
          }}
          type={"password"}
          placeholder={t(I18nCommandEnum.CONFIRM_PASSWORD)}
          onChange={(e) => (signUpInfo["confirm_password"] = e.target.value)}
        />

        <Button.SubMitButton
          style={{
            ...componentStyles.SUB_MIT_BUTTON,
            margin: 10,
          }}
          onClick={_signUp}
        >
          {t(I18nCommandEnum.SIGN_UP)}
        </Button.SubMitButton>
      </Container.ColumnContainer>
    </Container.RowContainer>
  );
};
