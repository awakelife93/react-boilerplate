import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import _ from "lodash";

import { RoutePath } from "../../route/routes";
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

  const getContents = useCallback(async (): Promise<void> => {
    try {
      const data = await findContents(skip);

      if (!_.isEmpty(data)) {
        setSkip(skip + defaultPagingCount);
        getContentsAction(data[0]);
      }
    } catch (e) {
      console.log("===========> ContentsPage Error", e);
    }
  }, [skip]);

  const history = useHistory();
  const goDetail = useCallback((item: ContentsIE): void => {
    history.push(RoutePath.CONTENTS_DETAIL, item);
  }, []);

  return (
    <List
      style={componentStyles.CARD}
      contents={contents}
      getContents={getContents}
      goDetail={goDetail}
      skip={skip}
    />
  );
};

export default Contents;
