import { useTranslation } from "react-i18next";
import { I18nCommandEnum } from "../../../../core/i18n/type";
import { UserStoreIE } from "../../../../redux/interface";
import { RoutePath } from "../../../../route/routes";
import { Button, Container, Label } from "../../../components";

interface SignActionIE {
  componentStyles: any;
  userInfo: UserStoreIE;
  _routePush: Function;
  _signOut: Function;
}

/**
 * @description Header Sign Component
 * @param {SignActionIE} props
 * @returns {React.ReactElement}
 */
export default (props: SignActionIE): React.ReactElement => {
  const {
    _routePush,
    _signOut,
    componentStyles,
    userInfo: { user },
  } = props;

  const { t } = useTranslation();
  return (
    <Container.LayoutContainer>
      {user.isLogin === false && (
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
      {user.isLogin === true && (
        <Container.RowContainer>
          <Label.CommonLabel
            style={{ ...componentStyles.COMMON_LABEL, margin: 0 }}
          >
            {user.info.nickname}
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
