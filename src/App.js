import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/About Us/AboutUs";
import LandingPage from "./pages/Landing/LandingPage";
import Playground from "./pages/Playground";
import StudentLife from "./pages/Student Life/StudentLife";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/student-life" component={StudentLife} />
          <Route exact path="/about" component={AboutUs} />
        </Switch>
      </Router>
    );
  }
}

export default App;
