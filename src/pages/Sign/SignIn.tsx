import _ from "lodash";
import { useHistory } from "react-router";

import { Container, Label, InputBox, Button } from "../../common/components";
import { signIn } from "../../api/PostAPI";
import { setLocalStorageItem } from "../../core";
import { useTranslation } from "react-i18next";
import { I18nCommandEnum } from "../../core/i18n/type";

/**
 * @description SignIn Component
 * @param props
 * @returns {Component}
 */

export default (props: any) => {
  const { t } = useTranslation();
  const signInfo = {
    email: "",
    password: "",
  };
  const history = useHistory();
  const _signIn = async () => {
    if (_.isEmpty(signInfo["email"]) || _.isEmpty(signInfo["password"])) {
      alert("로그인 정보를 다시 한번 확인 해주시기 바랍니다.");
      return false;
    }

    const res = await signIn(signInfo);

    if (_.isUndefined(res)) {
      alert("로그인 정보를 다시 한번 확인 해주시기 바랍니다.");
      return false;
    } else {
      setLocalStorageItem(res);
      history.push("/");
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
