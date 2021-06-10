import { LayoutContainer } from "../components/Conatainer";

export default (props: any) => {
  const { layoutStyles } = props;
  return (
    <LayoutContainer style={{ ...layoutStyles }}>
      {props.children}
    </LayoutContainer>
  );
};
