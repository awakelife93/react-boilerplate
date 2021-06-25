import _ from "lodash";
import { useTranslation } from "react-i18next";
import { I18nCommandEnum } from "../../../../core/i18n/type";
import { UserStoreIE } from "../../../../redux/interface";
import { RoutePath } from "../../../../route/routes";
import { Button, Container, Label, MenuBox } from "../../../components";

interface SignMenuIE {
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
const SignMenu: React.FC<SignMenuIE> = (
  props: SignMenuIE
): React.ReactElement => {
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
          <MenuBox
            children={
              <Label.CommonLabel
                style={{
                  ...componentStyles.COMMON_LABEL,
                  margin: 0,
                  cursor: "pointer",
                }}
              >
                {user.info.nickname}
              </Label.CommonLabel>
            }
            menuContainerStyle={{
              ...componentStyles.MENU_BOX.CONTAINER,
              borderRadius: 15,
              width: 150,
              height: 100,
              marginRight: 90,
              position: "absolute",
              top: 60,
              padding: 10,
            }}
            menuItemStyle={{
              ...componentStyles.MENU_BOX.ITEM,
              fontSize: 15,
              marginBottom: 5,
            }}
            renderType={"column"}
            renderItems={[
              {
                displayName: t(I18nCommandEnum.UPDATE_USER_INFO),
                value: () => alert("개발 예정입니다."),
              },
              {
                displayName: t(I18nCommandEnum.DELETE_ACCOUNT),
                value: () => alert("개발 예정입니다."),
              },
              {
                displayName: t(I18nCommandEnum.SIGN_OUT),
                value: _signOut,
              },
            ]}
            onClick={(action: Function) => {
              if (_.isFunction(action)) action();
            }}
          />
        </Container.RowContainer>
      )}
    </Container.LayoutContainer>
  );
};

export default SignMenu;
