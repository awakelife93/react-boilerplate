import { Image } from "../../common/components";
import { CommonImage } from "../../common/styles";
import { FadeIn } from "../../core";

/**
 * @description Main Component
 * @param props
 * @returns {Component}
 */
export default (props: any) => {
  return (
    <>
      <Image.BannerImage src={CommonImage.FREE_IMAGE1} />
      <Image.BannerImage src={CommonImage.FREE_IMAGE1} {...FadeIn()} />
      <Image.BannerImage src={CommonImage.FREE_IMAGE1} {...FadeIn()} />
    </>
  );
};
