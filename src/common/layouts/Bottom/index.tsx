import { BottomContainer } from "../../components/Conatainer";
import { CommonLabel } from "../../components/Label";

export default (props: any) => {
  const { layoutStyles, componentStyles } = props;
  return (
    <BottomContainer {...layoutStyles}>
      <CommonLabel {...componentStyles.COMMON_LABEL}>
        github:{" "}
        <a href="https://github.com/HyunwooP" rel="noreferrer" target="_blank">
          https://github.com/HyunwooP
        </a>
      </CommonLabel>
    </BottomContainer>
  );
};
