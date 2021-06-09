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
      <RowContainer align-items={"center"} padding={"20px"}>
        <TextButton
          {...componentStyles.TEXT_BUTTON}
          font-size={"35px"}
          onClick={() => _routePush("/")}
        >
          React Project
        </TextButton>
        <Icon.FaList
          {...componentStyles.ICON}
          style={{ marginLeft: 20, cursor: "pointer" }}
          size={20}
          onClick={() => _routePush(RoutePath.CONTENTS)}
        />
        <Icon.IoIosFlashlight
          {...componentStyles.ICON}
          style={{ marginLeft: 20, cursor: "pointer" }}
          size={20}
          onClick={() => _darkMode()}
        />
        {isShowAdContainer ? (
          <Icon.FaAngleUp
            {...componentStyles.ICON}
            style={{ marginLeft: 20, cursor: "pointer" }}
            size={20}
            onClick={() => _showAdContainer()}
          />
        ) : (
          <Icon.FaAngleDown
            {...componentStyles.ICON}
            style={{ marginLeft: 20, cursor: "pointer" }}
            size={20}
            onClick={() => _showAdContainer()}
          />
        )}
      </RowContainer>
    </>
  );
};
