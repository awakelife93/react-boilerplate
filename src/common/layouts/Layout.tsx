import { Container } from "../components";

export default (props: any) => {
  const { layoutStyles } = props;
  return (
    <Container.LayoutContainer style={{ ...layoutStyles }}>
      {props.children}
    </Container.LayoutContainer>
  );
};
