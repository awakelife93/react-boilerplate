import { I18nCommandEnum, TopDownMove } from "@/core";
import { ReduxStoreType } from "@/redux/type";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Container, Icon, Image, Label } from ".";
import useAction from "../hooks/useAction";
import useDesign from "../hooks/useDesign";
import { IComponent } from "../interface";
import CommonImageResources from "../styles/image";

/**
 * Ad
 * @description 미리 만들어둔 여분의 공간 컴포넌트
 * @param {IComponent} props
 * @returns {React.ReactElement}
 */
const Ad: React.FC<IComponent> = (props: IComponent): React.ReactElement => {
  const { t } = useTranslation();
  const { componentStyles } = useDesign();
  const { initShowAdAction } = useAction();
  const {
    reduxStore: { 
      themeStore: {
        useTheme
      }
    }
  } = useSelector((state: ReduxStoreType) => state);

  const _hideAdContainer = (): void => {
    if (_.isFunction(initShowAdAction)) {
      initShowAdAction();
    }
  };

  return (
    <Image.BackGroundImage
      requireStyle={{
        backgroundImage: useTheme
          ? `url(${CommonImageResources.FREE_IMAGE2})`
          : `url(${CommonImageResources.FREE_IMAGE3})`,
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
