import { connectWrapper } from "../../redux";
import { BottomContainer } from "../components/Conatainer";

const BottomComponent = (props: any) => {
  const { style } = props;
  return (
    <BottomContainer {...style}>
      github:{" "}
      <a href="https://github.com/HyunwooP" rel="noreferrer" target="_blank">
        https://github.com/HyunwooP
      </a>
    </BottomContainer>
  );
};

export default connectWrapper(BottomComponent);
