import useDesign from "@/common/hooks/useDesign";
import { Container, Label } from "../..";

type MessageLayoutType = {
  message: string;
}
const MessageLayout: React.FC<MessageLayoutType> = (props: MessageLayoutType) => {
  const { message } = props;
  const { componentStyles } = useDesign();
  
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
