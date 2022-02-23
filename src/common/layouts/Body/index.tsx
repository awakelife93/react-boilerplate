import React from "react";
import { Container } from "../../components";
import useDesign from "../../hooks/useDesign";
import { IComponent } from "../../interface";

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
