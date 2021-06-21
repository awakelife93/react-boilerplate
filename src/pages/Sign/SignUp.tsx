import _ from "lodash";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { Container, InputBox, Label, Button } from "../../common/components";
import { _showModalAction } from "../../common/layouts/Modal";
import { setLocalStorageItem, I18nCommandEnum } from "../../core";

import { signUp } from "../../api/PostAPI";
import { UserInfoIE } from "../../api/interface";

import { RoutePath } from "../../route/routes";
import { validationObject } from "../../utils";

export default (props: any) => {
  const { componentStyles } = props;
  const { t } = useTranslation();
  const signUpInfo = {
    email: "",
    nickname: "",
    password: "",
    confirm_password: "",
  };

  const history = useHistory();
  const _signUp = async () => {
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
        setLocalStorageItem({ ...userInfo });
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
    const { showModalAction } = props;
    if (_.isFunction(showModalAction)) {
      _showModalAction({
        next: showModalAction,
        type: "MESSAGE",
        item: {
          childrenProps: { message },
          style: {
            width: 500,
            height: 120,
            borderRadius: 25,
            padding: 20,
          },
          option: {
            dimClose: true,
            keyClose: true,
          },
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
