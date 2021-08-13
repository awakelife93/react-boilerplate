import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import _ from "lodash";

import UpdateUserInfo from "../../components/Modal/component/UpdateUserInfo";
import Introduce from "../../components/Modal/component/Introduce";

import { RoutePath } from "../../../route/routes";
import { Container } from "../../components";
import { signOut } from "../../../api/PostAPI";
import { SignMenu, IconsMenu } from "./Menu";

import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
} from "../../../core";
import { ComponentIE } from "../../interface";
import { deleteUser } from "../../../api/DeleteAPI";

/**
 * @description Header Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const Header: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const {
    layoutStyles,
    componentStyles,
    setThemeAction,
    showAdAction,
    initUserInfoAction,
    reduxStore: {
      globalStore: { isShowAdContainer },
      themeStore: { useTheme },
      userStore,
    },
  } = props;

  const history = useHistory();
  const _routePush = useCallback(
    (route: string) => {
      history.push(route);
    },
    [history]
  );

  const { i18n } = useTranslation();
  const _setLaunage = useCallback(
    (lng: string) => {
      setLocalStorageItem({ lng });
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  const _updateUserInfo = useCallback(() => {
    if (_.isFunction(window.globalFunc.showModalAction)) {
      window.globalFunc.showModalAction({
        children: UpdateUserInfo,
        item: {
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
        children: Introduce,
        item: {
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
  }, [useTheme, setThemeAction]);

  const _showAdContainer = useCallback(() => {
    if (_.isFunction(showAdAction)) {
      showAdAction(!isShowAdContainer);
    }
  }, [isShowAdContainer, showAdAction]);

  const _signOut = async ({ isDelete = false }: { isDelete: boolean }) => {
    try {
      const token = getLocalStorageItem("token");

      if (!_.isEmpty(token)) {
        if (isDelete === true) {
          await deleteUser();
        } else {
          await signOut();
        }

        // token 삭제
        removeLocalStorageItem("token");
        // 리덕스 초기화
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
    } catch (e) {
      console.log("_signOut Error", e);
    }
  };

  return (
    <header>
      <Container.HeaderContainer style={{ ...layoutStyles }}>
        <IconsMenu
          isShowAdContainer={isShowAdContainer}
          _routePush={_routePush}
          _themeMode={_themeMode}
          _showAdContainer={_showAdContainer}
          _setLaunage={_setLaunage}
          _showTemplateModal={_showTemplateModal}
          componentStyles={componentStyles}
        />
        <SignMenu
          userInfo={userStore}
          _routePush={_routePush}
          _signOut={_signOut}
          _updateUserInfo={_updateUserInfo}
          componentStyles={componentStyles}
        />
      </Container.HeaderContainer>
    </header>
  );
};

export default React.memo(Header);
