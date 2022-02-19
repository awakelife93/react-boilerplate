import reduxLibStore from "./reduxLib";
import reduxToolkitStore from "./reduxToolkit";

const reduxSelector = {
  reduxLib: () => {
    return reduxLibStore();
  },
  reduxToolkit: () => {
    return reduxToolkitStore;
  },
};

export default reduxSelector;
