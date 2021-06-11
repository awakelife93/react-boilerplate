import { ActionEnum } from "../../type";
import { ActionIE } from "../../interface";
import { ContentsIE } from "../../../api/GetAPI/interface";
import { initContentState } from "./default";

export default function contentsStore(
  state: ContentsIE[] = initContentState,
  action: ActionIE
) {
  switch (action.type) {
    case ActionEnum.GET_CONTENTS:
      return Object.assign([], state, {
        contents: action.value,
      });

    default:
      return state;
  }
}
