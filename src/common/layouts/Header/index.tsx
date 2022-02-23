import _ from "lodash";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../../api/DeleteAPI";
import { signOut } from "../../../api/PostAPI";
import {
    getLocalStorageItem,
    removeLocalStorageItem,
    setLocalStorageItem
} from "../../../core";
import { ReduxStoreType } from "../../../redux/type";
import { RoutePath } from "../../../route/routes";
import { Container } from "../../components";
import Introduce from "../../components/Modal/component/Introduce";
import UpdateUserInfo from "../../components/Modal/component/UpdateUserInfo";
import useAction from "../../hooks/useAction";
import useDesign from "../../hooks/useDesign";
import { IComponent } from "../../interface";
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
  const _routePush = useCallback(
    (route: string) => {
      navigate(route);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const { i18n } = useTranslation();
  const _setLanguage = useCallback(
    (lng: string) => {
      setLocalStorageItem({ lng });
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  const _updateUserInfo = useCallback(() => {
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

  const _showTemplateModal = useCallback(() => {
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

  const _themeMode = useCallback(() => {
    if (_.isFunction(setThemeAction)) {
      setLocalStorageItem({ useTheme: !useTheme });
      setThemeAction(!useTheme);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useTheme]);

  const _showAdContainer = useCallback(() => {
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
        _routePush(RoutePath.MAIN);
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
          _routePush={_routePush}
          _themeMode={_themeMode}
          _showAdContainer={_showAdContainer}
          _setLanguage={_setLanguage}
          _showTemplateModal={_showTemplateModal}
        />
        <SignMenu
          _routePush={_routePush}
          _signOut={_signOut}
          _updateUserInfo={_updateUserInfo}
        />
      </Container.HeaderContainer>
    </header>
  );
};

export default React.memo(Header);
