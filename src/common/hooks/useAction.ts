import { ReduxProviderActionType } from "@/redux/type";
import _ from "lodash";
import { useContext } from "react";
import { ActionContext } from "../contexts/ActionContext";

const useAction = (): ReduxProviderActionType => {
  const context = useContext(ActionContext);

  if (_.isNull(context)) {
    throw new Error("ActionContext is null");
  }

  return context;
};

export default useAction;
