import _ from "lodash";
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
      const { contentsAction } = props;
      const data = await getPagingContentsItem();
      if (_.isFunction(contentsAction)) {
        contentsAction(data);
      }
    } catch (e) {
      console.log("===========> MainPage Error", e);
    }
  };

  const { componentStyles } = props;
  return (
    <List
      style={componentStyles.CARD}
      cards={props.reduxStore.contentsStore.contents}
    />
  );
};

export default connectWrapper(ContentsComponent);
