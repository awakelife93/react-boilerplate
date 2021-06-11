import { Container } from "../../components";

export default (props: any) => {
  const { layoutStyles } = props;
  return (
    <Container.BodyContainer style={{ ...layoutStyles }}>
      {props.children}
    </Container.BodyContainer>
  );
};
