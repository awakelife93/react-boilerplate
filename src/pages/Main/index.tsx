import { BannerImage } from "../../common/components/Image";
import { FadeIn } from "../../core";

/**
 * @description Main Component
 * @param props
 * @returns {Component}
 */
export default (props: any) => {
  return (
    <>
      <BannerImage src={"/assets/img.png"} {...FadeIn()} />
      <BannerImage src={"/assets/img.png"} {...FadeIn()} />
      <BannerImage src={"/assets/img.png"} {...FadeIn()} />
    </>
  );
};
