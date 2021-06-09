import { ColumnContainer } from "../components/Conatainer";
import Icon from "../components/Icon";
import { CommonLabel } from "../components/Label";

// todo = styled component로 layout 따기 (common하게 쓸 수 있는 것으로)
const AdComponent = (props: any) => {
  const { layoutStyles, componentStyles } = props;
  return (
    <div
      style={{
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...layoutStyles.style,
      }}
    >
      <ColumnContainer>
        <CommonLabel
          {...componentStyles.COMMON_LABEL}
          font-weight={"bold"}
          font-size={"20px"}
        >
          AD 영역이라고 부르지만...
        </CommonLabel>
        <CommonLabel {...componentStyles.COMMON_LABEL} font-size={"15px"}>
          혹시 모를 상황을 대비하여
        </CommonLabel>
        <CommonLabel {...componentStyles.COMMON_LABEL} font-size={"15px"}>
          공간을 미리 만들어 둔다.
        </CommonLabel>
        <div>
          {/* todo = 애니메이션 처리 */}
          <Icon.FaAngleDoubleUp
            {...componentStyles.ICON}
            style={{ cursor: "pointer" }}
            size={30}
          />
        </div>
      </ColumnContainer>
    </div>
  );
};

export default AdComponent;
