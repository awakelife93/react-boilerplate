import React from "react";
import { useLocation } from "react-router-dom";
import { ContentsType } from "../../api/GetAPI/type";
import { Container, Image, Label } from "../../common/components";
import { ComponentIE } from "../../common/interface";

const Detail: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const location = useLocation();
  const state = location.state as ContentsType;
  const { componentStyles } = props;

  return (
    <Container.LayoutContainer>
      <Image.CommonImage
        src={state.contImageLink}
        style={{ height: 400, marginBottom: 20 }}
      />
      <Container.LayoutContainer style={{ padding: 20 }}>
        <Container.ColumnContainer>
          <Label.CommonLabel
            style={{
              ...componentStyles.COMMON_LABEL,
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            {state.contTitle}
          </Label.CommonLabel>
          <Label.CommonLabel
            style={{
              ...componentStyles.COMMON_LABEL,
              fontSize: 20,
            }}
          >
            {state.contSubTitle}
          </Label.CommonLabel>
          <Label.CommonLabel
            style={{
              ...componentStyles.COMMON_LABEL,
              fontSize: 15,
            }}
          >
            {state.contDesc}
          </Label.CommonLabel>
        </Container.ColumnContainer>
      </Container.LayoutContainer>
    </Container.LayoutContainer>
  );
};

export default React.memo(Detail);
