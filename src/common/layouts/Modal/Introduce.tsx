import { Container, Label, InputBox, Button } from "../../components";

export default (props: any) => {
  const { componentStyles } = props;
  return (
    <Container.ColumnContainer>
      <Label.CommonLabel
        style={{
          ...componentStyles.COMMON_LABEL,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Common Modal!
      </Label.CommonLabel>
      <Container.RowContainer
        style={{ ...componentStyles.COMMON_LABEL, marginBottom: 10 }}
      >
        어떻게 꾸며야 잘 꾸민 모달이 될까...
      </Container.RowContainer>
      <Container.RowContainer
        style={{ ...componentStyles.COMMON_LABEL, marginBottom: 10 }}
      >
        텍스트를 일단 막 넣어보도록 하자.
      </Container.RowContainer>
      <Container.RowContainer
        style={{ ...componentStyles.COMMON_LABEL, marginBottom: 10 }}
      >
        3줄 정도?
      </Container.RowContainer>
      <Container.RowContainer
        style={{ ...componentStyles.COMMON_LABEL, marginBottom: 10 }}
      >
        굿 3줄이다.
      </Container.RowContainer>
    </Container.ColumnContainer>
  );
};
