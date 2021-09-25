import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import "./config/lang/i18n";
import Home from "views/Home";
import MyPot from "views/MyPot";
import NotFound from "views/NotFound";

const App = () => {
  return (
    <Router basename="/index.html">
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mypot" component={MyPot} />

        <Route path={"*"} component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
