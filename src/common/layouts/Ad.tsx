import _ from "lodash";
import { FadeIn, Move } from "../../core";
import { Container, Label, Icon, Image } from "../components";
import { CommonImage } from "../styles";

const AdComponent = (props: any) => {
  const { componentStyles, reduxStore } = props;

  const _hideAdContainer = () => {
    const { adAction } = props;

    if (_.isFunction(adAction)) {
      adAction(false);
    }
  };

  const isDarkMode = reduxStore.themeStore.isDarkMode;
  return (
    <Image.BackGroundImage
      requireStyle={{
        backgroundImage: isDarkMode
          ? `url(${CommonImage.FREE_IMAGE2})`
          : `url(${CommonImage.FREE_IMAGE3})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container.ColumnContainer>
        <Label.CommonLabel
          style={{
            ...componentStyles.COMMON_LABEL,
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          AD 영역이라고 부르지만...
        </Label.CommonLabel>
        <Label.CommonLabel
          style={{ ...componentStyles.COMMON_LABEL, fontSize: "15px" }}
        >
          혹시 모를 상황을 대비하여
        </Label.CommonLabel>
        <Label.CommonLabel
          style={{ ...componentStyles.COMMON_LABEL, fontSize: "15px" }}
        >
          공간을 미리 만들어 둔다.
        </Label.CommonLabel>
        <div {...Move()}>
          <Icon.FaAngleDoubleUp
            style={{ ...componentStyles.ICON, cursor: "pointer" }}
            size={30}
            onClick={() => _hideAdContainer()}
          />
        </div>
      </Container.ColumnContainer>
    </Image.BackGroundImage>
  );
};

export default AdComponent;
