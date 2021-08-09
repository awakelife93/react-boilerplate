import _ from "lodash";
import { useTranslation } from "react-i18next";
import { TopDownMove } from "../../core";
import { I18nCommandEnum } from "../../core/i18n/type";
import { Container, Label, Icon, Image } from ".";
import { CommonImage } from "../styles";
import { ComponentIE } from "../interface";
import { useCallback } from "react";

/**
 * Ad
 * @description 미리 만들어둔 여분의 공간 컴포넌ㄴ트
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const Ad: React.FC<ComponentIE> = (props: ComponentIE): React.ReactElement => {
  const {
    componentStyles,
    reduxStore: {
      themeStore: { isDarkMode },
    },
  } = props;
  const { t } = useTranslation();

  const _hideAdContainer = useCallback((): void => {
    const { initShowAdAction } = props;

    if (_.isFunction(initShowAdAction)) {
      initShowAdAction();
    }
  }, [props]);

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
        <div {...TopDownMove()}>
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

export default Ad;
