import _ from "lodash";
import { useState } from "react";
import { Container } from "../components";

interface ItemIE {
  displayName: string;
  value: any;
}

export default (props: any) => {
  const [isShowMenuBox, setShowMenuBox] = useState(false);
  const { menuContainerStyle, menuItemStyle, onClick, renderItems } = props;

  if (!_.isArray(renderItems) || renderItems.length === 0) {
    return null;
  }

  return (
    <Container.ColumnContainer onClick={() => setShowMenuBox(!isShowMenuBox)}>
      <props.children />
      {isShowMenuBox === true && (
        <Container.RowContainer style={{ ...menuContainerStyle }}>
          {renderItems.map((item: ItemIE, idx: number) => {
            return (
              <Container.RowContainer
                key={`MenuBox_Item_${idx}`}
                style={{
                  ...menuItemStyle,
                  cursor: "pointer",
                }}
                onClick={() => onClick(item.value)}
              >
                {item.displayName}
              </Container.RowContainer>
            );
          })}
        </Container.RowContainer>
      )}
    </Container.ColumnContainer>
  );
};
