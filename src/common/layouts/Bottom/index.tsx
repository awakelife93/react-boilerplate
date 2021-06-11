import { Container, Label } from "../../components";

export default (props: any) => {
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
