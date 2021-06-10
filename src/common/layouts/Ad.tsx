import _ from "lodash";
import { Move } from "../../core";
import { ColumnContainer } from "../components/Conatainer";
import Icon from "../components/Icon";
import { CommonLabel } from "../components/Label";

// todo = styled component로 layout 따기 (common하게 쓸 수 있는 것으로)
const AdComponent = (props: any) => {
  const { layoutStyles, componentStyles } = props;

  const _hideAdContainer = () => {
    const { adAction } = props;

    if (_.isFunction(adAction)) {
      adAction(false);
    }
  };

  return (
    <div
      style={{
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...layoutStyles,
      }}
    >
      <ColumnContainer>
        <CommonLabel
          style={{
            ...componentStyles.COMMON_LABEL,
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          AD 영역이라고 부르지만...
        </CommonLabel>
        <CommonLabel
          style={{ ...componentStyles.COMMON_LABEL, fontSize: "15px" }}
        >
          혹시 모를 상황을 대비하여
        </CommonLabel>
        <CommonLabel
          style={{ ...componentStyles.COMMON_LABEL, fontSize: "15px" }}
        >
          공간을 미리 만들어 둔다.
        </CommonLabel>
        <div {...Move()}>
          <Icon.FaAngleDoubleUp
            style={{ ...componentStyles.ICON, cursor: "pointer" }}
            size={30}
            onClick={() => _hideAdContainer()}
          />
        </div>
      </ColumnContainer>
    </div>
  );
};

export default AdComponent;
