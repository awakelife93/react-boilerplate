import { ContentsIE } from "../../../api/GetAPI/interface";
import { ActionEnum } from "../../type";

export const getContentsAction = (value: ContentsIE[]) => ({
  type: ActionEnum.GET_CONTENTS,
  value,
});
