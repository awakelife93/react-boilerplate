import { BodyContainer } from "../../components/Conatainer";

export default (props: any) => {
  const { layoutStyles } = props;
  return (
    <BodyContainer style={{ ...layoutStyles }}>{props.children}</BodyContainer>
  );
};
