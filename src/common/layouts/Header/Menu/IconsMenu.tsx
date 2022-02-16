import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { I18nCommandEnum } from "../../../../core/i18n";
import { ReduxStoreType } from "../../../../redux/type";
import { RoutePath } from "../../../../route/routes";
import { Button, Container, Icon, MenuBox } from "../../../components";
import useDesign from "../../../hooks/useDesign";

type IconMenuType = {
  _themeMode: Function;
  _routePush: Function;
  _setLanguage: Function;
  _showAdContainer: Function;
  _showTemplateModal: Function;
};
/**
 * @description Header Icons Component
 * @param {IconMenuType} props
 * @returns {React.ReactElement}
 */
const IconMenu: React.FC<IconMenuType> = (
  props: IconMenuType
): React.ReactElement => {
  const { t } = useTranslation();
  const {
    _routePush,
    _themeMode,
    _showAdContainer,
    _setLanguage,
    _showTemplateModal,
  } = props;
  const {
    reduxStore: {
      globalStore: {
        isShowAdContainer
      }
    }
  } = useSelector((state: ReduxStoreType) => state);
  const { componentStyles } = useDesign();
  
  return (
    <Container.RowContainer
      style={{
        alignItems: "center",
      }}
    >
      <Button.TextButton
        style={{
          ...componentStyles.TEXT_BUTTON,
          fontSize: 35,
        }}
        onClick={() => _routePush("/")}
      >
        React Project
      </Button.TextButton>
      <Icon.FaList
        style={{ ...componentStyles.ICON, marginLeft: 20, cursor: "pointer" }}
        size={20}
        onClick={() => _routePush(RoutePath.CONTENTS)}
      />
      <Icon.IoIosFlashlight
        style={{ ...componentStyles.ICON, marginLeft: 20, cursor: "pointer" }}
        size={20}
        onClick={() => _themeMode()}
      />
      {isShowAdContainer ? (
        <Icon.FaAngleUp
          style={{
            ...componentStyles.ICON,
            marginLeft: 20,
            cursor: "pointer",
          }}
          size={20}
          onClick={() => _showAdContainer()}
        />
      ) : (
        <Icon.FaAngleDown
          style={{
            ...componentStyles.ICON,
            marginLeft: 20,
            cursor: "pointer",
          }}
          size={20}
          onClick={() => _showAdContainer()}
        />
      )}
      <MenuBox
        children={
          <Icon.GiWorld
            style={{
              ...componentStyles.ICON,
              marginLeft: 20,
              cursor: "pointer",
            }}
            size={20}
          />
        }
        menuContainerStyle={{
          ...componentStyles.MENU_BOX.CONTAINER,
          // * 최대한 공통으로 따고 싶은 스타일이지만, 애가 어디에 위치할지 몰라서
          // * props로 던지자...

          // * 애는 테마와 전혀 상관이 없어서 Theme에 안넣는다.
          borderRadius: 15,
          width: 150,
          height: 30,
          marginLeft: 20,
          position: "absolute",
          top: 60,
        }}
        menuItemStyle={{
          ...componentStyles.MENU_BOX.ITEM,
          fontSize: 15,
          marginRight: 5,
        }}
        renderItems={[
          {
            displayName: t(I18nCommandEnum.KO),
            value: "ko",
          },
          {
            displayName: t(I18nCommandEnum.EN),
            value: "en",
          },
        ]}
        onClick={(lng: string) => _setLanguage(lng)}
      />
      <Icon.FaThList
        style={{ ...componentStyles.ICON, marginLeft: 20, cursor: "pointer" }}
        size={20}
        onClick={() => _showTemplateModal()}
      />
    </Container.RowContainer>
  );
};

export default IconMenu;
