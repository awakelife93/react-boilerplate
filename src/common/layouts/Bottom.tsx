import { connectWrapper } from "../../redux";
import { BottomContainer } from "../components/Conatainer";

const BottomComponent = (props: any) => {
  const { layoutStyles } = props;
  return (
    <BottomContainer {...layoutStyles}>
      github:{" "}
      <a href="https://github.com/HyunwooP" rel="noreferrer" target="_blank">
        https://github.com/HyunwooP
      </a>
    </BottomContainer>
  );
};

export default connectWrapper(BottomComponent);
