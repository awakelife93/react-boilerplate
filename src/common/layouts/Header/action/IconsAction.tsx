import { RoutePath } from "../../../../route/routes";
import { Container, Button, Icon } from "../../../components";
import { MenuBox } from "../../../components";

export default (props: any) => {
  const {
    isShowAdContainer,
    _routePush,
    _darkMode,
    _showAdContainer,
    _setLaunage,
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
          fontSize: "35px",
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
        children={() => (
          <Icon.GiWorld
            style={{
              ...componentStyles.ICON,
              marginLeft: 20,
              cursor: "pointer",
            }}
            size={20}
          />
        )}
        menuContainerStyle={{
          ...componentStyles.MENU_BOX_CONTAINER,
          // 최대한 공통으로 따고 싶은 스타일이지만, 애가 어디에 위치할지 몰라서
          // props로 던지자...

          // 애는 테마와 전혀 상관이 없어서 Theme에 안넣는다.
          borderRadius: "15px",
          width: "150px",
          height: "30px",
          marginLeft: "150px",
          position: "absolute",
          top: "60px",
        }}
        menuItemStyle={{
          ...componentStyles.MENU_BOX_ITEM,
          fontSize: "15px",
          marginRight: "5px",
        }}
        renderItems={["한국어", "영어"]}
        onSelect={(launage: any) => _setLaunage(launage)}
      />
    </Container.RowContainer>
  );
};
