import { Container } from "@/common/components";
import useDesign from "@/common/hooks/useDesign";
import { IComponent } from "@/common/interface";
import React from "react";

/**
 * @description Body Component
 * @param {IComponent} props
 * @returns {React.ReactElement}
 */
const Body: React.FC<IComponent> = (
  props: IComponent
): React.ReactElement => {
  const { children } = props;
  const { bodyStyles } = useDesign();

  return (
    <Container.BodyContainer style={{ ...bodyStyles }}>
      {children}
    </Container.BodyContainer>
  );
};

export default Body;
