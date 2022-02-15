import _ from "lodash";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { UserInfoIE } from "../../api/interface";
import { signUp } from "../../api/PutAPI";
import { Button, Container, InputBox, Label } from "../../common/components";
import useAction from "../../common/hooks/useAction";
import useDesign from "../../common/hooks/useDesign";
import { ComponentIE } from "../../common/interface";
import { UnknownObject } from "../../common/type";
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
  const { componentStyles } = useDesign();
  const { setUserInfoAction } = useAction();
  const { t } = useTranslation();

  // Input
  const [userEmail, setEmail] = useState("");
  const [userNickname, setNickname] = useState("");
  const [userPw, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    window.addEventListener("keypress", checkKeyPress);
    return () => window.removeEventListener("keypress", checkKeyPress);
  }, []);

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
    (item: UnknownObject): boolean => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userPw, confirmPassword]
  );

  const history = useHistory();
  const _signUp = useCallback(async (): Promise<void | boolean> => {
    const item = { userEmail, userNickname, userPw, confirmPassword };

    if (validationItem(item)) {
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
      } catch (error: any) {
        switch (error.status) {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    userEmail,
    userNickname,
    userPw,
  ]);

  const checkKeyPress = useCallback(
    (e: KeyboardEvent): void => {
      if (e.code === "Enter") {
        _signUp();
      }
    },
    [_signUp]
  );

  return (
    <Container.RowContainer>
      <form>
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNickname(e.target.value)}
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
            autoComplete={"off"}
            placeholder={t(I18nCommandEnum.PASSWORD)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
            autoComplete={"off"}
            placeholder={t(I18nCommandEnum.CONFIRM_PASSWORD)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
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
      </form>
    </Container.RowContainer>
  );
};

export default SignUp;
