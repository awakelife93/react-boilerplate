import { Container, Label } from "@/common/components";
import useDesign from "@/common/hooks/useDesign";
import { IComponent } from "@/common/interface";
import React from "react";

/**
 * @description Bottom Component
 * @param {IComponent} props
 * @returns {React.ReactElement}
 */
const Bottom: React.FC<IComponent> = (
  props: IComponent
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
