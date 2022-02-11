import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { findContents } from "../../api/GetAPI";
import { ContentsType } from "../../api/GetAPI/type";
import { defaultPagingCount } from "../../common/const";
import { ComponentIE } from "../../common/interface";
import { RoutePath } from "../../route/routes";
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

  const getContents = useCallback(async (): Promise<void> => {
    try {
      const data = await findContents(skip);

      if (!_.isEmpty(data)) {
        setSkip(skip + defaultPagingCount);
        getContentsAction(data[0]);
      }
    } catch (error: unknown) {
      console.log("===========> ContentsPage Error", error);
    }
  }, [skip, getContentsAction]);

  const history = useHistory();
  const goDetail = useCallback(
    (item: ContentsType): void => {
      history.push(RoutePath.CONTENTS_DETAIL, item);
    },
    [history]
  );

  useEffect(() => {
    if (_.isEmpty(contents)) getContents();
  }, [contents, getContents]);

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
