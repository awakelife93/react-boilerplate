import { useEffect } from "react";
import { getPagingContentsItem } from "../../api/GetAPI";
import { connectWrapper } from "../../redux";
import List from "./List";

/**
 * @description Contents Component
 * @param props
 * @returns {Component}
 */
const ContentsComponent = (props: any) => {
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

  return <List cards={props.reduxStore.contentsStore.contents} />;
};

export default connectWrapper(ContentsComponent);
