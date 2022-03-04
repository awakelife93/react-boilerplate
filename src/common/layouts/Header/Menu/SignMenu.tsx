import { Button, Container, Label, MenuBox } from "@/common/components";
import useDesign from "@/common/hooks/useDesign";
import { I18nCommandEnum } from "@/core";
import { ReduxStoreType } from "@/redux/type";
import { RoutePath } from "@/route/routes";
import _ from "lodash";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

type SignMenuType = {
  _routePush: Function;
  _signOut: Function;
  _updateUserInfo: Function;
}

/**
 * @description Header Sign Component
 * @param {SignMenuType} props
 * @returns {React.ReactElement}
 */
const SignMenu: React.FC<SignMenuType> = (
  props: SignMenuType
): React.ReactElement => {
  const {
    _routePush,
    _signOut,
    _updateUserInfo,
  } = props;
  const {
    reduxStore: {
      userStore: {
        user: {
          isLogin,
          info: {
            name
          }
        }
      }
    }
  } = useSelector((state: ReduxStoreType) => state);
  const { componentStyles } = useDesign();

  const { t } = useTranslation();
  return (
    <Container.LayoutContainer>
      {!isLogin && (
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
      {isLogin && (
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
                {name}
              </Label.CommonLabel>
            }
            menuContainerStyle={{
              ...componentStyles.MENU_BOX.CONTAINER,
              borderRadius: 15,
              width: 150,
              height: 100,
              right: 10,
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
                value: () => _updateUserInfo(),
              },
              {
                displayName: t(I18nCommandEnum.DELETE_ACCOUNT),
                value: () => _signOut({ isDelete: true }),
              },
              {
                displayName: t(I18nCommandEnum.SIGN_OUT),
                value: () => _signOut({ isDelete: false }),
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
