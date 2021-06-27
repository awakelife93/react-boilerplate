import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { defaultPagingCount } from "../../common/const";
import { ComponentIE } from "../../common/interface";
import { findContents } from "../../api/GetAPI";
import { ContentsIE } from "../../api/GetAPI/interface";
import List from "./List";

/**
 * @description Contents Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const Contents: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const {
    getContentsAction,
    componentStyles,
    reduxStore: {
      contentsStore: { contents },
    },
  } = props;
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    if (_.isEmpty(contents)) getContents();
  }, []);

  const getContents = useCallback(async () => {
    try {
      const data: ContentsIE[] = await findContents(skip);

      if (!_.isEmpty(data)) {
        setSkip(skip + defaultPagingCount);
        getContentsAction(data);
      }
    } catch (e) {
      console.log("===========> ContentsPage Error", e);
    }
  }, [skip]);

  return (
    <List
      style={componentStyles.CARD}
      contents={contents}
      getContents={getContents}
      skip={skip}
    />
  );
};

export default Contents;
