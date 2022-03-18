import { findContents } from "@/api/GetAPI";
import { ContentsType } from "@/api/GetAPI/type";
import useDesign from "@/common/hooks/useDesign";
import { IComponent } from "@/common/interface";
import { RoutePath } from "@/route/routes";
import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
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
  const [skip, setSkip] = useState(0);
  const [ contents, setContents ] = useState<ContentsType[]>([]);
  
  const getContents = useCallback(async (): Promise<void> => {
      const data = await findContents(skip);
          
      if (!_.isEmpty(data[0])) {
        setSkip(skip + 20);
        setContents(contents.concat(data[0]));
      }
  }, [ skip ]);

  const navigate = useNavigate();
  const goDetail = (item: ContentsType): void => {
    navigate(RoutePath.CONTENTS_DETAIL, { state: item });
  }

  useEffect(() => {
    getContents();
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
