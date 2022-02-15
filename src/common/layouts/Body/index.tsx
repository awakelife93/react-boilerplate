import React from "react";
import { Container } from "../../components";
import useDesign from "../../hooks/useDesign";
import { ComponentIE } from "../../interface";

/**
 * @description Body Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const Body: React.FC<ComponentIE> = (
  props: ComponentIE
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
