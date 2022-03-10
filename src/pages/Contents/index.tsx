import { findContents } from "@/api/GetAPI";
import { ContentsType } from "@/api/GetAPI/type";
import useAction from "@/common/hooks/useAction";
import useDesign from "@/common/hooks/useDesign";
import { IComponent } from "@/common/interface";
import { ReduxStoreType } from "@/redux/type";
import { RoutePath } from "@/route/routes";
import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import List from "./List";

/**
 * @description Contents Component
 * @param {IComponent} props
 * @returns {React.ReactElement}
 */
const Contents: React.FC<IComponent> = (
  props: IComponent
): React.ReactElement => {
  const { componentStyles } = useDesign();
  const { getContentsAction } = useAction();
  const [skip, setSkip] = useState(0);
  const {
    reduxStore: {
      contentsStore: {
        contents
      }
    }
  } = useSelector((state: ReduxStoreType) => state);

  const getContents = useCallback(async (): Promise<void> => {
    try {
      const data = await findContents(skip);

      if (!_.isEmpty(data)) {
        setSkip(skip + 20);
        getContentsAction(data[0]);
      }
    } catch (error: unknown) {
      console.log("===========> ContentsPage Error", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    skip
  ]);

  const navigate = useNavigate();
  const goDetail = useCallback(
    (item: ContentsType): void => {
      navigate(RoutePath.CONTENTS_DETAIL, { state: item });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    if (_.isEmpty(contents)) getContents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contents]);

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
