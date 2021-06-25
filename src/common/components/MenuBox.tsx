import _ from "lodash";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "../components";
import { defaultShowModal } from "../const";

interface ItemIE {
  displayName: string;
  value: any;
}

interface MenuBoxIE {
  renderItems: ItemIE[];
  children: React.FC;
  onClick: (props: any) => null;
  menuContainerStyle: any;
  menuItemStyle: any;
}

const MenuBox: React.FC<MenuBoxIE> = (props: MenuBoxIE) => {
  const [isShowMenuBox, setShowMenuBox] = useState(false);
  const { menuContainerStyle, menuItemStyle, onClick, renderItems } = props;

  const checkOutSideClick = (event: any) => {
    // 어느 영역을 눌러도 종료가 되게끔...
    setShowMenuBox(defaultShowModal);
  };

  useEffect(() => {
    if (isShowMenuBox === true) {
      window.addEventListener("click", checkOutSideClick);
    }

    return () => window.removeEventListener("click", checkOutSideClick);
  }, [isShowMenuBox]);

  if (!_.isArray(renderItems) || renderItems.length === 0) {
    return null;
  } else {
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
  }
};

export default MenuBox;
