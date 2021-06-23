import _ from "lodash";
import { useEffect, useState } from "react";
import { findContents } from "../../api/GetAPI";
import { defaultPagingCount } from "../../common/const";
import List from "./List";

/**
 * @description Contents Component
 * @param props
 * @returns {Component}
 */
export default (props: any) => {
  const {
    componentStyles,
    reduxStore: {
      contentsStore: { contents },
    },
  } = props;
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    getContents();
  }, []);

  const getContents = async () => {
    try {
      const { getContentsAction } = props;
      const data = await findContents(skip);

      if (_.isFunction(getContentsAction) && !_.isEmpty(data)) {
        setSkip(skip + defaultPagingCount);
        getContentsAction(data);
      }
    } catch (e) {
      console.log("===========> ContentsPage Error", e);
    }
  };

  return (
    <List
      style={componentStyles.CARD}
      contents={contents}
      getContents={getContents}
      skip={skip}
    />
  );
};
