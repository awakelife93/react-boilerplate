import { updateUser } from "@/api/PatchAPI";
import { UserInfoType } from "@/api/type";
import useAction from "@/common/hooks/useAction";
import useDesign from "@/common/hooks/useDesign";
import { CommonColor } from "@/common/styles";
import { UnknownObject } from "@/common/type";
import { I18nCommandEnum } from "@/core";
import { ReduxStoreType } from "@/redux/type";
import _ from "lodash";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Button, Container, InputBox, Label } from "../../";

type UpdateUserInfoType = {
  childrenProps: UnknownObject;
  _closeModal: Function;
}

const UpdateUserInfo: React.FC<UpdateUserInfoType> = (
  props: UpdateUserInfoType
) => {
  const { _closeModal } = props;
  const { componentStyles } = useDesign();
  const { setUserInfoAction } = useAction();
  const { t } = useTranslation();
  const {
    reduxStore: {
      userStore: {
        user
      }
    }
  } = useSelector((state: ReduxStoreType) => state);

  const [nameError, setNMErrorItems] = useState("");
  const [passwordError, setPWErrorItems] = useState("");
  const [confirmPasswordError, setConfirmPWErrorItems] = useState("");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validationItem = () => {
    if (!_.isEmpty(password)) {
      if (_.isEmpty(confirmPassword)) {
        setConfirmPWErrorItems("확인 패스워드를 입력해주시기 바랍니다.");
        return false;
      }
      if (password !== confirmPassword) {
        setPWErrorItems("비밀번호가 동일하지 않습니다.");
        return false;
      }
    }

    if (_.isEmpty(name)) {
      setNMErrorItems("변경하실 닉네임을 입력해주세요.");
      return false;
    }

    return true;
  };

  const _updateUser = async () => {
    if (validationItem()) {
      try {
        const userInfo: UserInfoType = await updateUser({
          userId: user.info.userId,
          name,
          password,
        });

        _closeModal();
        setUserInfoAction({
          isLogin: true,
          info: {
            userId: userInfo.userId,
            email: userInfo.email,
            name: userInfo.name,
          },
        });
      } catch (error: unknown) {
        console.log("_updateUser Error", error);
      }
    }
  };

  return (
    <Container.ColumnContainer>
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
        onClick={() => setNMErrorItems("")}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <Container.RowContainer
        style={{
          alignSelf: "flex-start",
        }}
      >
        <Label.CommonLabel style={{ color: CommonColor.RED, fontSize: 12 }}>
          {nameError}
        </Label.CommonLabel>
      </Container.RowContainer>
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
        onClick={() => setPWErrorItems("")}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <Container.RowContainer
        style={{
          alignSelf: "flex-start",
        }}
      >
        <Label.CommonLabel style={{ color: CommonColor.RED, fontSize: 12 }}>
          {passwordError}
        </Label.CommonLabel>
      </Container.RowContainer>
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
        onClick={() => setConfirmPWErrorItems("")}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
      />
      <Container.RowContainer
        style={{
          alignSelf: "flex-start",
        }}
      >
        <Label.CommonLabel style={{ color: CommonColor.RED, fontSize: 12 }}>
          {confirmPasswordError}
        </Label.CommonLabel>
      </Container.RowContainer>
      {/**********************************************************/}
      <Button.SubMitButton
        style={{
          ...componentStyles.SUB_MIT_BUTTON,
          margin: 10,
        }}
        onClick={() => _updateUser()}
      >
        {t(I18nCommandEnum.UPDATE_USER_INFO)}
      </Button.SubMitButton>
    </Container.ColumnContainer>
  );
};

export default UpdateUserInfo;
