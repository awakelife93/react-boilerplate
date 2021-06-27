import React from "react";
import { Container, Label } from "../../components";
import { ComponentIE } from "../../interface";

/**
 * @description Bottom Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const Bottom: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const { layoutStyles, componentStyles } = props;
  return (
    <Container.BottomContainer style={{ ...layoutStyles }}>
      <Label.CommonLabel style={{ ...componentStyles.COMMON_LABEL }}>
        github:{" "}
        <a href="https://github.com/HyunwooP" rel="noreferrer" target="_blank">
          https://github.com/HyunwooP
        </a>
      </Label.CommonLabel>
    </Container.BottomContainer>
  );
};

export default React.memo(Bottom);
