import { BodyContainer } from "../components/Conatainer";

export default (props: any) => {
  const { style } = props;
  return <BodyContainer {...style}>{props.children}</BodyContainer>;
};
