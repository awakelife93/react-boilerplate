import React from "react";
import { useTranslation } from "react-i18next";
import { I18nCommandEnum } from "../../../../core/i18n/type";
import { RoutePath } from "../../../../route/routes";
import { Container, Button, Icon } from "../../../components";
import { MenuBox } from "../../../components";

interface IconMenuIE {
  componentStyles: any;
  isShowAdContainer: boolean;
  _darkMode: Function;
  _routePush: Function;
  _setLaunage: Function;
  _showAdContainer: Function;
  _showTemplateModal: Function;
}

/**
 * @description Header Icons Component
 * @param {IconsActionIE} props
 * @returns {React.ReactElement}
 */
const IconMenu: React.FC<IconMenuIE> = (
  props: IconMenuIE
): React.ReactElement => {
  const { t } = useTranslation();
  const {
    isShowAdContainer,
    _routePush,
    _darkMode,
    _showAdContainer,
    _setLaunage,
    _showTemplateModal,
    componentStyles,
  } = props;

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
        onClick={() => _darkMode()}
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
          // 최대한 공통으로 따고 싶은 스타일이지만, 애가 어디에 위치할지 몰라서
          // props로 던지자...

          // 애는 테마와 전혀 상관이 없어서 Theme에 안넣는다.
          borderRadius: 15,
          width: 150,
          height: 30,
          marginLeft: 150,
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
        onClick={(lng: any) => _setLaunage(lng)}
      />
      <Icon.FaThList
        style={{ ...componentStyles.ICON, marginLeft: 20, cursor: "pointer" }}
        size={20}
        onClick={() => _showTemplateModal()}
      />
    </Container.RowContainer>
  );
};

export default React.memo(IconMenu);
