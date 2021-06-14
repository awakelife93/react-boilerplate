import { Container, Image } from "../../common/components";
import { CommonImage } from "../../common/styles";
import { FadeIn } from "../../core";

/**
 * @description Main Component
 * @param props
 * @returns {Component}
 */
export default (props: any) => {
  return (
    <Container.LayoutContainer>
      <Image.CommonImage src={CommonImage.FREE_IMAGE1} />
      <Image.CommonImage src={CommonImage.FREE_IMAGE1} {...FadeIn()} />
      <Image.CommonImage src={CommonImage.FREE_IMAGE1} {...FadeIn()} />
    </Container.LayoutContainer>
  );
};
