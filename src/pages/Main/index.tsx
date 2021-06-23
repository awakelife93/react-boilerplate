import { Container, Image } from "../../common/components";
import { CommonImage } from "../../common/styles";
import { ScrollFadeIn } from "../../core";

/**
 * @description Main Component
 * @param props
 * @returns {Component}
 */
export default (props: any) => {
  return (
    <Container.LayoutContainer>
      <Image.CommonImage src={CommonImage.FREE_IMAGE1} />
      <Image.CommonImage src={CommonImage.FREE_IMAGE1} {...ScrollFadeIn()} />
      <Image.CommonImage src={CommonImage.FREE_IMAGE1} {...ScrollFadeIn()} />
    </Container.LayoutContainer>
  );
};
