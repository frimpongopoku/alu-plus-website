import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import Playground from "./pages/Playground";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
