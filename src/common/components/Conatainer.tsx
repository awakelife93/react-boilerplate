import styled from "styled-components";

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  padding: 20px;
  background-color: black;

  font-size: 30px;
  font-weight: bold;
  color: white;

  display: flex;
  justify-content: space-between;

  button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 15px;
  }
`;

export const BottomContainer = styled.footer`
  width: 100%;
  height: 100px;
  padding: 20px;
  background-color: black;

  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
