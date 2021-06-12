import _ from "lodash";
import { useTranslation } from "react-i18next";
import { Move } from "../../core";
import { I18nCommandEnum } from "../../core/i18n/type";
import { Container, Label, Icon, Image } from "../components";
import { CommonImage } from "../styles";

const AdComponent = (props: any) => {
  const { componentStyles, reduxStore } = props;
  const { t } = useTranslation();

  const _hideAdContainer = () => {
    const { showAdAction } = props;

    if (_.isFunction(showAdAction)) {
      showAdAction(false);
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
            fontSize: 20,
          }}
        >
          {t(I18nCommandEnum.AD_TITLE)}
        </Label.CommonLabel>
        <Label.CommonLabel
          style={{ ...componentStyles.COMMON_LABEL, fontSize: 15 }}
        >
          {t(I18nCommandEnum.AD_CONTENT1)}
        </Label.CommonLabel>
        <Label.CommonLabel
          style={{ ...componentStyles.COMMON_LABEL, fontSize: 15 }}
        >
          {t(I18nCommandEnum.AD_CONTENT2)}
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
