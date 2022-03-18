import { IUserInfo } from "@/api/interface";
import { signUp } from "@/api/PostAPI";
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
import { useNavigate } from "react-router-dom";

/**
 * @description SignUp Component
 * @param {IComponent} props
 * @returns {React.ReactElement}
 */
const SignUp: React.FC<IComponent> = (
  props: IComponent
): React.ReactElement => {
  const { componentStyles } = useDesign();
  const { setUserInfoAction } = useAction();
  const { t } = useTranslation();

  // Input
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      showMessageModal("회원가입 정보를 다시 한번 확인 해주시기 바랍니다.");
      return false;
    }

    if (confirmPassword !== password) {
      showMessageModal("패스워드를 확인해주시기 바랍니다.");
      return false;
    }

    return true;
  };

  const navigate = useNavigate();
  const _signUp = async (): Promise<void | boolean> => {
    const item = { email, name, password, confirmPassword };

    if (validationItem(item)) {
      try {
        const userInfo: IUserInfo = await signUp(item);

        if (_.isUndefined(userInfo)) {
          showMessageModal(
            "회원가입 정보를 다시 한번 확인 해주시기 바랍니다."
          );
          return false;
        } else {
          setLocalStorageItem({ token: userInfo.token });
          setUserInfoAction({
            user: {
              isLogin: true,
              info: {
                userId: userInfo.userId,
                email: userInfo.email,
                name: userInfo.name,
              },
            }
          });
          navigate(RoutePath.MAIN);
        }
      } catch (error: any) {
        switch (error.status) {
          case 409: {
            showMessageModal(
              "중복된 이메일이 있습니다. 다른 이메일을 사용해주시기 바랍니다."
            );
            return false;
          }
        }
      }
    }
  };

  const checkKeyPress = (e: KeyboardEvent): void => {
    if (e.code === "Enter") {
      _signUp();
    }
  };

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
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        {/**********************************************************/}
        <Container.RowContainer
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Label.CommonLabel style={{ ...componentStyles.COMMON_LABEL }}>
            {t(I18nCommandEnum.NAME)}
          </Label.CommonLabel>
        </Container.RowContainer>
        <InputBox.CommonInputBox
          style={{
            padding: 5,
            marginBottom: 15,
          }}
          placeholder={t(I18nCommandEnum.NAME)}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
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
    </Container.RowContainer>
  );
};

export default SignUp;
