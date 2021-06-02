import { ContentIE } from "../../../api/GetAPI/interface";
import { ActionEnum } from "../../type";

export const contentsAction = (value: ContentIE[]) => ({
  type: ActionEnum.GET_CONTENTS,
  value,
});
