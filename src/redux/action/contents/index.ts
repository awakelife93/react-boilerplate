import { ContentsIE } from "../../../api/GetAPI/interface";
import { ActionEnum } from "../../type";

export const contentsAction = (value: ContentsIE[]) => ({
  type: ActionEnum.GET_CONTENTS,
  value,
});
