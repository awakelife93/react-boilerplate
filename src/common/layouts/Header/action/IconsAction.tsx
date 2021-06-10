import { RoutePath } from "../../../../route/routes";
import { TextButton } from "../../../components/Button";
import { RowContainer } from "../../../components/Conatainer";
import Icon from "../../../components/Icon";

export default (props: any) => {
  const {
    isShowAdContainer,
    _routePush,
    _darkMode,
    _showAdContainer,
    componentStyles,
  } = props;
  return (
    <>
      <RowContainer
        style={{
          alignItems: "center",
          padding: "20px",
        }}
      >
        <TextButton
          style={{
            ...componentStyles.TEXT_BUTTON,
            fontSize: "35px",
          }}
          onClick={() => _routePush("/")}
        >
          React Project
        </TextButton>
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
      </RowContainer>
    </>
  );
};
