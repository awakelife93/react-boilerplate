import React from "react";
import { Container, Label } from "../../components";
import useDesign from "../../hooks/useDesign";
import { ComponentIE } from "../../interface";

/**
 * @description Bottom Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const Bottom: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const { bottomStyles, componentStyles } = useDesign();

  return (
    <Container.BottomContainer style={{ ...bottomStyles }}>
      <Label.CommonLabel style={{ ...componentStyles.COMMON_LABEL }}>
        github:{" "}
        <a href="https://github.com/awakelife93" rel="noreferrer" target="_blank">
          https://github.com/awakelife93
        </a>
      </Label.CommonLabel>
    </Container.BottomContainer>
  );
};

export default React.memo(Bottom);
