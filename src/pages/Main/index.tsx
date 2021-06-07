import { BannerImage } from "../../common/components/Image";
import { connectWrapper } from "../../redux";
import { fadeIn } from "../../core";

/**
 * @description Main Component
 * @param props
 * @returns {Component}
 */
const MainComponent = (props: any) => {
  return (
    <>
      <BannerImage src={"/assets/img.png"} {...fadeIn()} />
      <BannerImage src={"/assets/img.png"} {...fadeIn()} />
      <BannerImage src={"/assets/img.png"} {...fadeIn()} />
    </>
  );
};

export default connectWrapper(MainComponent);
