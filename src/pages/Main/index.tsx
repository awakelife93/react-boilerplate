import { Container, Image } from "../../common/components";
import { IComponent } from "../../common/interface";
import { CommonImage } from "../../common/styles";
import { ScrollFadeIn } from "../../core";

/**
 * @description Main Component
 * @param {IComponent} props
 * @returns {React.ReactElement}
 */
const Main: React.FC<IComponent> = (
  props: IComponent
): React.ReactElement => {
  return (
    <Container.LayoutContainer>
      <Image.CommonImage src={CommonImage.FREE_IMAGE1} alt={'Sample Banner Image 1'} />
      <Image.CommonImage src={CommonImage.FREE_IMAGE1} {...ScrollFadeIn()} alt={'Sample Banner Image 2'} />
      <Image.CommonImage src={CommonImage.FREE_IMAGE1} {...ScrollFadeIn()} alt={'Sample Banner Image 3'} />
    </Container.LayoutContainer>
  );
};

export default Main;
