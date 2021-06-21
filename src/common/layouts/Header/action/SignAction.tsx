import { useTranslation } from "react-i18next";
import { I18nCommandEnum } from "../../../../core/i18n/type";
import { RoutePath } from "../../../../route/routes";
import { Button, Container, Label } from "../../../components";

export default (props: any) => {
  const { _routePush, _signOut, componentStyles, userInfo } = props;
  const { t } = useTranslation();
  return (
    <Container.LayoutContainer>
      {userInfo.isLogin === false && (
        <Container.RowContainer>
          <Button.TextButton
            style={{
              ...componentStyles.TEXT_BUTTON,
            }}
            onClick={() => _routePush(RoutePath.SIGN_UP)}
          >
            {t(I18nCommandEnum.SIGN_UP)}
          </Button.TextButton>
          <Button.TextButton
            style={{
              ...componentStyles.TEXT_BUTTON,
            }}
            onClick={() => _routePush(RoutePath.SIGN_IN)}
          >
            {t(I18nCommandEnum.SIGN_IN)}
          </Button.TextButton>
        </Container.RowContainer>
      )}
      {userInfo.isLogin === true && (
        <Container.RowContainer>
          <Label.CommonLabel
            style={{ ...componentStyles.COMMON_LABEL, margin: 0 }}
          >
            {userInfo.info.nickname}
          </Label.CommonLabel>
          <Button.TextButton
            style={{
              ...componentStyles.TEXT_BUTTON,
            }}
            onClick={() => _signOut()}
          >
            {t(I18nCommandEnum.SIGN_OUT)}
          </Button.TextButton>
        </Container.RowContainer>
      )}
    </Container.LayoutContainer>
  );
};
