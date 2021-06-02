import { useEffect } from "react";

import { getPagingContentsItem } from "../../api/GetAPI";

import { connectWrapper } from "../../redux";
import { MainContainer } from "../../common/components/Conatainer";
import List from "./List";

/**
 * @description Main Component
 * @param props
 * @returns {Component}
 */
const Main = (props: any) => {
  useEffect(() => {
    getContents();
  }, [props.reduxStore.contentsStore.length]);

  const getContents = async () => {
    try {
      const data = await getPagingContentsItem();
      props.contentsAction(data);
    } catch (e) {
      console.log("===========> MainPage Error", e);
    }
  };

  return (
    <MainContainer>
      <List cards={props.reduxStore.contentsStore.contents} />
    </MainContainer>
  );
};

export default connectWrapper(Main);
