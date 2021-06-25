import { Container, Label } from "../../../components";

interface MessageLayoutIE {
  componentStyles: any;
  message: string;
}

const MessageLayout: React.FC<MessageLayoutIE> = (props: MessageLayoutIE) => {
  const { componentStyles, message } = props;
  return (
    <Container.ColumnContainer>
      <Label.CommonLabel
        style={{
          ...componentStyles.COMMON_LABEL,
          fontWeight: "bold",
        }}
      >
        {message}
      </Label.CommonLabel>
    </Container.ColumnContainer>
  );
};

export default MessageLayout;
