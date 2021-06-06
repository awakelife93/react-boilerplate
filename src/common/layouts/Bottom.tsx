import { useEffect } from "react";
import { connectWrapper } from "../../redux";
import { BottomContainer } from "../components/Conatainer";

const BottomComponent = (props: any) => {
  useEffect(() => {
    console.log("Bottom", props);
  });
  return (
    <BottomContainer>
      github:{" "}
      <a href="https://github.com/HyunwooP" rel="noreferrer" target="_blank">
        https://github.com/HyunwooP
      </a>
    </BottomContainer>
  );
};

export default connectWrapper(BottomComponent);
