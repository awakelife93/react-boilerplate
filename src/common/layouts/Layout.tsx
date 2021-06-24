import { Container } from "../components";
import { ComponentIE } from "../interface";

export default (props: ComponentIE): React.ReactElement => {
  const { layoutStyles, children } = props;
  return (
    <Container.LayoutContainer style={{ ...layoutStyles }}>
      {children}
    </Container.LayoutContainer>
  );
};
