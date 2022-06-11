import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { getThemeItem } from "./api/GetAPI";
import "./App.css";
import DesignProvider from "./common/contexts/DesignContext";
import useAction from "./common/hooks/useAction";
import useAuth from "./common/hooks/useInitUserProfile";
import { generateThemeStyle } from "./common/styles";
import "./core/i18n";
import Route from "./route";
import { setDefaultLanguage, setWindowFunction } from "./utils";

const App = (): React.ReactElement => {
  const { initUserInfoAction, showModalAction, setThemeItemAction } = useAction();
  useAuth();
  
  const setThemeItem = async (): Promise<void> => {
    try {
      const item = await getThemeItem();
      const themeItem = generateThemeStyle({ item });
      setThemeItemAction(themeItem);
    } catch(error: unknown) {
      console.log("setThemeItem Error", error);
    }
  };

  const initialize = (): void => {
    setWindowFunction({ initUserInfoAction, showModalAction });
    setDefaultLanguage();
    setThemeItem();
  };

  useEffect(() => {
    initialize();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Router>
      <DesignProvider>
        <Route />
      </DesignProvider>
    </Router>
  )
};

export default App;
