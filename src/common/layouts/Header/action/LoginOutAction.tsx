import { useTranslation } from "react-i18next";
import { I18nCommandEnum } from "../../../../core/i18n/type";
import { RoutePath } from "../../../../route/routes";
import { Button } from "../../../components";

export default (props: any) => {
  const { isLogin, _routePush, _logout, componentStyles } = props;
  const { t } = useTranslation();
  return (
    <>
      {isLogin === false && (
        <Button.TextButton
          style={{
            ...componentStyles.TEXT_BUTTON,
          }}
          onClick={() => _routePush(RoutePath.LOGIN)}
        >
          {t(I18nCommandEnum.LOGIN)}
        </Button.TextButton>
      )}
      {isLogin === true && (
        <Button.TextButton
          style={{
            ...componentStyles.TEXT_BUTTON,
          }}
          onClick={() => _logout()}
        >
          {t(I18nCommandEnum.LOGOUT)}
        </Button.TextButton>
      )}
    </>
  );
};
