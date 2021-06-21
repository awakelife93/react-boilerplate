import _ from "lodash";
import { useHistory } from "react-router";

import { Container, Label, InputBox, Button } from "../../common/components";
import { signIn } from "../../api/PostAPI";
import { setLocalStorageItem } from "../../core";
import { useTranslation } from "react-i18next";
import { I18nCommandEnum } from "../../core/i18n/type";
import { UserInfoIE } from "../../api/interface";
import { _showModalAction } from "../../common/layouts/Modal";
import { RoutePath } from "../../route/routes";

/**
 * @description SignIn Component
 * @param props
 * @returns {Component}
 */
const signInfo = {
  email: "",
  password: "",
};
export default (props: any) => {
  const { t } = useTranslation();

  const history = useHistory();
  const _signIn = async () => {
    const { setUserInfoAction } = props;
    if (_.isEmpty(signInfo["email"]) || _.isEmpty(signInfo["password"])) {
      _showMessageModal("로그인 정보를 다시 한번 확인 해주시기 바랍니다.");
      return false;
    }

    try {
      const userInfo: UserInfoIE = await signIn(signInfo);

      if (_.isUndefined(userInfo)) {
        _showMessageModal("로그인 정보를 다시 한번 확인 해주시기 바랍니다.");
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
        case 401: {
          _showMessageModal("잘못된 이메일, 비밀번호 입니다.");
          return false;
        }
        case 404: {
          _showMessageModal("계정이 없습니다.");
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
            {t(I18nCommandEnum.EMAIL)}
          </Label.CommonLabel>
        </Container.RowContainer>
        <InputBox.CommonInputBox
          style={{
            padding: 5,
            marginBottom: 15,
          }}
          placeholder={t(I18nCommandEnum.EMAIL)}
          onChange={(e) => (signInfo["email"] = e.target.value)}
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
          placeholder={t(I18nCommandEnum.PASSWORD)}
          type={"password"}
          onChange={(e) => (signInfo["password"] = e.target.value)}
        />
        <Button.SubMitButton
          style={{
            ...componentStyles.SUB_MIT_BUTTON,
            margin: 10,
          }}
          onClick={_signIn}
        >
          {t(I18nCommandEnum.SIGN_IN)}
        </Button.SubMitButton>
      </Container.ColumnContainer>
    </Container.RowContainer>
  );
};
