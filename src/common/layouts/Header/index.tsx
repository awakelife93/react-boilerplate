import { deleteUser } from "@/api/DeleteAPI";
import { signOut } from "@/api/PostAPI";
import { Container } from "@/common/components";
import Introduce from "@/common/components/Modal/component/Introduce";
import UpdateUserInfo from "@/common/components/Modal/component/UpdateUserInfo";
import useAction from "@/common/hooks/useAction";
import useDesign from "@/common/hooks/useDesign";
import { IComponent } from "@/common/interface";
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from "@/core";
import { ReduxStoreType } from "@/redux/type";
import { RoutePath } from "@/route/routes";
import _ from "lodash";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconsMenu, SignMenu } from "./Menu";

/**
 * @description Header Component
 * @param {IComponent} props
 * @returns {React.ReactElement}
 */
const Header: React.FC<IComponent> = (
  props: IComponent
): React.ReactElement => {
  const {
    reduxStore: {
      globalStore: { isShowAdContainer },
      themeStore: { useTheme },
    },
  } = useSelector((state: ReduxStoreType) => state);
  const { showAdAction, setThemeAction, initUserInfoAction } = useAction();
  const { headerStyles } = useDesign();

  const navigate = useNavigate();
  const routePush = useCallback(
    (routePath: RoutePath) => {
      navigate(routePath);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const { i18n } = useTranslation();
  const setLanguage = useCallback(
    (lng: string) => {
      setLocalStorageItem({ lng });
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  const updateUserInfo = useCallback(() => {
    if (_.isFunction(window.globalFunc.showModalAction)) {
      window.globalFunc.showModalAction({
        item: {
          children: UpdateUserInfo,
          style: {
            width: 500,
            height: document.documentElement.clientHeight - 100,
            borderRadius: 25,
            padding: 20,
          },
        },
      });
    }
  }, []);

  const showTemplateModal = useCallback(() => {
    if (_.isFunction(window.globalFunc.showModalAction)) {
      window.globalFunc.showModalAction({
        item: {
          children: Introduce,
          style: {
            width: 500,
            height: 300,
            borderRadius: 25,
            padding: 20,
          },
        },
      });
    }
  }, []);

  const themeMode = useCallback(() => {
    if (_.isFunction(setThemeAction)) {
      setLocalStorageItem({ useTheme: !useTheme });
      setThemeAction(!useTheme);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useTheme]);

  const showAdContainer = useCallback(() => {
    if (_.isFunction(showAdAction)) {
      showAdAction(!isShowAdContainer);
    }
  }, [isShowAdContainer, showAdAction]);

  const _signOut = async ({ isDelete = false }: { isDelete: boolean }) => {
    try {
      const token = getLocalStorageItem("token");

      if (!_.isEmpty(token)) {
        if (isDelete) {
          await deleteUser();
        } else {
          await signOut();
        }

        removeLocalStorageItem("token");
        initUserInfoAction();
        routePush(RoutePath.MAIN);
      } else {
        if (_.isFunction(window.globalFunc.showModalAction)) {
          window.globalFunc.showModalAction({
            type: "MESSAGE",
            item: {
              childrenProps: { message: "비정상적인 접근입니다." },
            },
          });
        }
        await signOut();
      }
    } catch (error: unknown) {
      console.log("_signOut Error", error);
    }
  };

  return (
    <header>
      <Container.HeaderContainer style={{ ...headerStyles }}>
        <IconsMenu
          routePush={routePush}
          themeMode={themeMode}
          showAdContainer={showAdContainer}
          setLanguage={setLanguage}
          showTemplateModal={showTemplateModal}
        />
        <SignMenu
          routePush={routePush}
          _signOut={_signOut}
          updateUserInfo={updateUserInfo}
        />
      </Container.HeaderContainer>
    </header>
  );
};

export default React.memo(Header);
