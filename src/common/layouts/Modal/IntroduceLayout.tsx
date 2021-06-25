import { Container, Label } from "../../components";

interface IntroduceLayoutIE {
  componentStyles: any;
}

const IntroduceLayout: React.FC<IntroduceLayoutIE> = (
  props: IntroduceLayoutIE
) => {
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
        Common Modal
      </Label.CommonLabel>
      <Container.RowContainer
        style={{ ...componentStyles.COMMON_LABEL, marginBottom: 10 }}
      >
        모달이 필요한 컴포넌트를 전달 받아
      </Container.RowContainer>
      <Container.RowContainer
        style={{ ...componentStyles.COMMON_LABEL, marginBottom: 10 }}
      >
        해당 레이아웃안에 위치시킨다.
      </Container.RowContainer>
      <Container.RowContainer
        style={{ ...componentStyles.COMMON_LABEL, marginBottom: 10 }}
      ></Container.RowContainer>
      <Container.RowContainer
        style={{ ...componentStyles.COMMON_LABEL, marginBottom: 10 }}
      >
        리사이징 고려중
      </Container.RowContainer>
    </Container.ColumnContainer>
  );
};

export default IntroduceLayout;
