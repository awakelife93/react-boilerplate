import { Container, Label } from "../..";
import { ComponentStyleType } from "../../../type";

type MessageLayoutType = {
  componentStyles: ComponentStyleType;
  message: string;
}

const MessageLayout: React.FC<MessageLayoutType> = (props: MessageLayoutType) => {
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
