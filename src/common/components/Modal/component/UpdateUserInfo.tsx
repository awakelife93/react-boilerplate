import _ from "lodash";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserInfoIE } from "../../../../api/interface";
import { updateUser } from "../../../../api/PatchAPI";
import { I18nCommandEnum } from "../../../../core";
import { UserStoreIE } from "../../../../redux/interface";
import { Button, Container, InputBox, Label } from "../../";
import { CommonColor } from "../../../styles";
import { ComponentStyleIE } from "../../../interface";

interface UpdateUserInfoIE {
  componentStyles: ComponentStyleIE;
  childrenProps: any;
  userStore: UserStoreIE;
  _closeModal: Function;
  setUserInfoAction: Function;
}

const UpdateUserInfo: React.FC<UpdateUserInfoIE> = (
  props: UpdateUserInfoIE
) => {
  const { componentStyles, userStore, _closeModal, setUserInfoAction } = props;
  const { t } = useTranslation();

  // Error
  const [nicknameError, setNMErrorItems] = useState("");
  const [passwordError, setPWErrorItems] = useState("");
  const [confirmPasswordError, setConfirmPWErrorItems] = useState("");

  // Input
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validationItem = useCallback(() => {
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

    if (_.isEmpty(nickname)) {
      setNMErrorItems("변경하실 닉네임을 입력해주세요.");
      return false;
    }

    return true;
  }, [nickname, password, confirmPassword]);

  const _updateUser = async () => {
    if (validationItem() === true) {
      try {
        const userInfo: UserInfoIE = await updateUser({
          id: userStore.user.info.id,
          nickname,
          password,
        });

        setUserInfoAction({
          info: {
            nickname: userInfo.nickname,
          },
        });
        _closeModal();
      } catch (e) {
        console.log("_updateUser Error", e);
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
          {t(I18nCommandEnum.NICKNAME)}
        </Label.CommonLabel>
      </Container.RowContainer>
      <InputBox.CommonInputBox
        style={{
          padding: 5,
          marginBottom: 15,
        }}
        placeholder={t(I18nCommandEnum.NICKNAME)}
        onClick={() => setNMErrorItems("")}
        onChange={(e) => setNickname(e.target.value)}
      />
      <Container.RowContainer
        style={{
          alignSelf: "flex-start",
        }}
      >
        <Label.CommonLabel style={{ color: CommonColor.RED, fontSize: 12 }}>
          {nicknameError}
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
        placeholder={t(I18nCommandEnum.PASSWORD)}
        onClick={() => setPWErrorItems("")}
        onChange={(e) => setPassword(e.target.value)}
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
        placeholder={t(I18nCommandEnum.CONFIRM_PASSWORD)}
        onClick={() => setConfirmPWErrorItems("")}
        onChange={(e) => setConfirmPassword(e.target.value)}
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
