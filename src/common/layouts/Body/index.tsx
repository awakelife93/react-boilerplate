import { Container } from "../../components";
import { ComponentIE } from "../../interface";

/**
 * @description Body Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
export default (props: ComponentIE): React.ReactElement => {
  const { layoutStyles, children } = props;
  return (
    <Container.BodyContainer style={{ ...layoutStyles }}>
      {children}
    </Container.BodyContainer>
  );
};
