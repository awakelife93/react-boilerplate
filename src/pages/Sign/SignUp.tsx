import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { UserInfoIE } from "../../api/interface";
import { signUp } from "../../api/PutAPI";
import { Button, Container, InputBox, Label } from "../../common/components";
import { ComponentIE } from "../../common/interface";
import { I18nCommandEnum, setLocalStorageItem } from "../../core";
import { RoutePath } from "../../route/routes";
import { validationObject } from "../../utils";

/**
 * @description SignUp Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const SignUp: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const { componentStyles } = props;
  const { t } = useTranslation();

  // Input
  const [userEmail, setEmail] = useState("");
  const [userNickname, setNickname] = useState("");
  const [userPw, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    window.addEventListener("keypress", checkKeyPress);
    return () => window.removeEventListener("keypress", checkKeyPress);
  });

  const _showMessageModal = useCallback((message: string): void => {
    if (_.isFunction(window.globalFunc.showModalAction)) {
      window.globalFunc.showModalAction({
        type: "MESSAGE",
        item: {
          childrenProps: { message },
        },
      });
    }
  }, []);

  const validationItem = useCallback(
    (item: any): boolean => {
      if (!validationObject(item)) {
        _showMessageModal("회원가입 정보를 다시 한번 확인 해주시기 바랍니다.");
        return false;
      }

      if (confirmPassword !== userPw) {
        _showMessageModal("패스워드를 확인해주시기 바랍니다.");
        return false;
      }

      return true;
    },
    [userPw, confirmPassword, _showMessageModal]
  );

  const history = useHistory();
  const _signUp = useCallback(async (): Promise<void | boolean> => {
    const { setUserInfoAction } = props;
    const item = { userEmail, userNickname, userPw, confirmPassword };

    if (validationItem(item) === true) {
      try {
        const userInfo: UserInfoIE = await signUp(item);

        if (_.isUndefined(userInfo)) {
          _showMessageModal(
            "회원가입 정보를 다시 한번 확인 해주시기 바랍니다."
          );
          return false;
        } else {
          setLocalStorageItem({ token: userInfo.token });
          setUserInfoAction({
            isLogin: true,
            info: {
              userId: userInfo.userId,
              userEmail: userInfo.userEmail,
              userNickname: userInfo.userNickname,
            },
          });
          history.push(RoutePath.MAIN);
        }
      } catch (e: any) {
        switch (e.status) {
          // 이메일 중복
          case 409: {
            _showMessageModal(
              "중복된 이메일이 있습니다. 다른 이메일을 사용해주시기 바랍니다."
            );
            return false;
          }
        }
      }
    }
  }, [
    _showMessageModal,
    confirmPassword,
    history,
    props,
    userEmail,
    userNickname,
    userPw,
    validationItem,
  ]);

  const checkKeyPress = useCallback(
    (event: any): void => {
      if (_.isString(event.code) && event.code === "Enter") {
        _signUp();
      }
    },
    [_signUp]
  );

  return (
    <Container.RowContainer>
      <Container.ColumnContainer>
        {/**********************************************************/}
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
          onChange={(e) => setEmail(e.target.value)}
        />
        {/**********************************************************/}
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
          onChange={(e) => setNickname(e.target.value)}
        />
        {/**********************************************************/}
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
          onChange={(e) => setPassword(e.target.value)}
        />
        {/**********************************************************/}
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
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/**********************************************************/}
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

export default SignUp;
