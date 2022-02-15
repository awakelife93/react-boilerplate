import _ from "lodash";
import { useContext } from "react";
import { DesignContext, DesignContextType } from "../contexts/DesignContext";

const useDesign = (): DesignContextType => {
  const context = useContext(DesignContext);

  if (_.isNull(context)) {
    throw new Error("DesignContext is null");
  }

  return context;
};

export default useDesign;