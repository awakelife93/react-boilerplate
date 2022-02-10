import _ from "lodash";
import { AnyAction } from "redux";
import { ActionEnum, ContentsStore } from "../../type";
import { initContentState } from "./default";

export default function contentsStore(
  state: ContentsStore = initContentState,
  action: AnyAction
) {
  switch (action.type) {
    case ActionEnum.GET_CONTENTS:
      return _.merge([], state, {
        contents: [...state.contents, ...action.value],
      });

    default:
      return state;
  }
}
