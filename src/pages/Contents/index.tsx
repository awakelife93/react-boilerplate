import _ from "lodash";
import { useEffect } from "react";
import { getPagingContentsItem } from "../../api/GetAPI";
import List from "./List";

/**
 * @description Contents Component
 * @param props
 * @returns {Component}
 */
export default (props: any) => {
  useEffect(() => {
    getContents();
  }, [props.reduxStore.contentsStore.length]);

  const getContents = async () => {
    try {
      const { getContentsAction } = props;
      const data = await getPagingContentsItem();
      if (_.isFunction(getContentsAction)) {
        getContentsAction(data);
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
