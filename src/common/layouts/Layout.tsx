import { LayoutContainer } from "../components/Conatainer";

export default (props: any) => {
  const { layoutStyles } = props;
  return <LayoutContainer {...layoutStyles}>{props.children}</LayoutContainer>;
};
