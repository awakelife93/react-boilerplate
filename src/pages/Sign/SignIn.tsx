import { IUserInfo } from "@/api/interface";
import { signIn } from "@/api/PostAPI";
import { Button, Container, InputBox, Label } from "@/common/components";
import useAction from "@/common/hooks/useAction";
import useDesign from "@/common/hooks/useDesign";
import { IComponent } from "@/common/interface";
import { UnknownObject } from "@/common/type";
import { I18nCommandEnum, setLocalStorageItem } from "@/core";
import { RoutePath } from "@/route/routes";
import { validationObject } from "@/utils";
import _ from "lodash";
import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    window.addEventListener("keypress", checkKeyPress);
    return () => window.removeEventListener("keypress", checkKeyPress);
  }, []);

  const showMessageModal = (message: string): void => {
    if (_.isFunction(window.globalFunc.showModalAction)) {
      window.globalFunc.showModalAction({
        type: "MESSAGE",
        item: {
          childrenProps: { message },
        },
      });
    }
  };

  const validationItem = (item: UnknownObject): boolean => {
    if (!validationObject(item)) {
      showMessageModal("로그인 정보를 다시 한번 확인 해주시기 바랍니다.");
      return false;
    }

    return true;
  };

  const _signIn = async (): Promise<void | boolean> => {
    const item = { email, password };
    
    if (validationItem(item)) {
      try {
        const userInfo: IUserInfo = await signIn({ email, password });
        
        setLocalStorageItem({ token: userInfo.token });
        setUserInfoAction({
          isLogin: true,
          info: {
            userId: userInfo.userId,
            email: userInfo.email,
            name: userInfo.name,
          }
        });
        navigate(RoutePath.MAIN);
      } catch (error: any) {
        switch (error.status) {
          case 401: {
            showMessageModal("잘못된 이메일, 비밀번호 입니다.");
            return false;
          }
          case 403: {
            showMessageModal("잘못된 계정입니다.");
            return false;
          }
          case 404: {
            showMessageModal("계정이 없습니다.");
            return false;
          }
        }
      }
    }
  };

  const checkKeyPress = (e: KeyboardEvent): void => {
    if (e.code === "Enter") {
      _signIn();
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
