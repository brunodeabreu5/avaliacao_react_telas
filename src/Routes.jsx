import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Erro404 from "./pages/Erro404/index";
import Cadastro from "./pages/cadastro/index";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="*" exact component={Erro404} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
