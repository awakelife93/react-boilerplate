import { ContentsType } from "@/api/GetAPI/type";
import { Container, Image, Label } from "@/common/components";
import useDesign from "@/common/hooks/useDesign";
import { IComponent } from "@/common/interface";
import React from "react";
import { useLocation } from "react-router-dom";

const Detail: React.FC<IComponent> = (
  props: IComponent
): React.ReactElement => {
  const location = useLocation();
  const state = location.state as ContentsType;
  const { componentStyles } = useDesign();

  return (
    <Container.LayoutContainer>
      <Image.CommonImage
        src={state.imageLink}
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
            {state.title}
          </Label.CommonLabel>
          <Label.CommonLabel
            style={{
              ...componentStyles.COMMON_LABEL,
              fontSize: 20,
            }}
          >
            {state.subTitle}
          </Label.CommonLabel>
          <Label.CommonLabel
            style={{
              ...componentStyles.COMMON_LABEL,
              fontSize: 15,
            }}
          >
            {state.description}
          </Label.CommonLabel>
        </Container.ColumnContainer>
      </Container.LayoutContainer>
    </Container.LayoutContainer>
  );
};

export default Detail;
