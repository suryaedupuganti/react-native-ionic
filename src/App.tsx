import "./theme/variables.css";
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";

import { IonApp, IonSplitPane, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from "./../src/pages/LoginPage/LoginPage";
import Menu from "./components/Menu/Menu";
import ListPage from "./pages/ListPage/ListPage";
import Page from "./pages/HomePage/Page";

/* Core CSS required for Ionic components to work properly */
/* Basic CSS for apps built with Ionic */
/* Optional CSS utils that can be commented out */
/* Theme variables */
const App: React.FC = () => {
  const [login, setLogin] = useState(false);

  return (
    <Router>
      <div className="App">
        <IonApp>
          <IonReactRouter>
            <IonSplitPane contentId="main">
              <Menu />
              <IonRouterOutlet id="main">
                <Route exact path="/" component={LoginPage} />
                <Route path="/login" component={LoginPage} exact />
                <Route path="/page/Home" component={Page} exact />
                <Route path="/page/Home/:name" component={Page} exact />
              </IonRouterOutlet>
            </IonSplitPane>
          </IonReactRouter>
        </IonApp>
      </div>
    </Router>
  );
};
export default App;
