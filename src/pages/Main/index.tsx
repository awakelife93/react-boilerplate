import { BannerImage } from "../../common/components/Image";
import { fadeIn } from "../../core";

/**
 * @description Main Component
 * @param props
 * @returns {Component}
 */
export default (props: any) => {
  return (
    <>
      <BannerImage src={"/assets/img.png"} {...fadeIn()} />
      <BannerImage src={"/assets/img.png"} {...fadeIn()} />
      <BannerImage src={"/assets/img.png"} {...fadeIn()} />
    </>
  );
};
