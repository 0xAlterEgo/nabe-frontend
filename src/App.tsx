import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import "./config/lang/i18n";
import Home from "views/Home";
import MyPot from "views/MyPot";
import NotFound from "views/NotFound";
import Winner from "views/Winner";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mypot" component={MyPot} />
        <Route exact path="/winner" component={Winner} />

        <Route path={"*"} component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
