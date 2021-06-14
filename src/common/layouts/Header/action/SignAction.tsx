import { useTranslation } from "react-i18next";
import { I18nCommandEnum } from "../../../../core/i18n/type";
import { RoutePath } from "../../../../route/routes";
import { Button, Container } from "../../../components";

export default (props: any) => {
  const { isSignIn, _routePush, _signOut, componentStyles } = props;
  const { t } = useTranslation();
  return (
    <Container.LayoutContainer>
      {isSignIn === false && (
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
      {isSignIn === true && (
        <Button.TextButton
          style={{
            ...componentStyles.TEXT_BUTTON,
          }}
          onClick={() => _signOut()}
        >
          {t(I18nCommandEnum.SIGN_OUT)}
        </Button.TextButton>
      )}
    </Container.LayoutContainer>
  );
};
