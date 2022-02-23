import _ from "lodash";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { IUserInfo } from "../../api/interface";
import { signIn } from "../../api/PostAPI";
import { Button, Container, InputBox, Label } from "../../common/components";
import useAction from "../../common/hooks/useAction";
import useDesign from "../../common/hooks/useDesign";
import { IComponent } from "../../common/interface";
import { UnknownObject } from "../../common/type";
import { setLocalStorageItem } from "../../core";
import { I18nCommandEnum } from "../../core/i18n";
import { RoutePath } from "../../route/routes";
import { validationObject } from "../../utils";

/**
 * @description SignIn Component
 * @param {IComponent} props
 * @returns {React.ReactElement}
 */
const SignIn: React.FC<IComponent> = (
  props: IComponent
): React.ReactElement => {
  const { componentStyles } = useDesign();
  const { setUserInfoAction } = useAction();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [userEmail, setEmail] = useState("");
  const [userPw, setPassword] = useState("");

  useEffect(() => {
    window.addEventListener("keypress", checkKeyPress);
    return () => window.removeEventListener("keypress", checkKeyPress);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        _showMessageModal("로그인 정보를 다시 한번 확인 해주시기 바랍니다.");
        return false;
      }

      return true;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const _signIn = useCallback(async (): Promise<void | boolean> => {
    const item = { userEmail, userPw };

    if (validationItem(item)) {
      try {
        const userInfo: IUserInfo = await signIn({ userEmail, userPw });

        if (_.isUndefined(userInfo)) {
          _showMessageModal("로그인 정보를 다시 한번 확인 해주시기 바랍니다.");
          return false;
        } else {
          setLocalStorageItem({ token: userInfo.token });
          setUserInfoAction({
            user: {
              isLogin: true,
              info: {
                userId: userInfo.userId,
                userEmail: userInfo.userEmail,
                userNickname: userInfo.userNickname,
              },
            }
          });
          navigate(RoutePath.MAIN);
        }
      } catch (error: any) {
        switch (error.status) {
          case 401: {
            _showMessageModal("잘못된 이메일, 비밀번호 입니다.");
            return false;
          }
          case 403: {
            _showMessageModal("잘못된 계정입니다.");
            return false;
          }
          case 404: {
            _showMessageModal("계정이 없습니다.");
            return false;
          }
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEmail, userPw]);

  const checkKeyPress = useCallback(
    (e: KeyboardEvent): void => {
      if (e.code === "Enter") {
        _signIn();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

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
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
          autoComplete={"off"}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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

export default SignIn;
