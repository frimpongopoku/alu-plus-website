import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/About Us/AboutUs";
import AcademicCalendar from "./pages/Calendar/AcademicCalendar";
import Creators from "./pages/Creators/Creators";
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
          <Route exact path="/academics" component={AcademicCalendar} />
          <Route exact path="/creators" component={Creators} />
        </Switch>
      </Router>
    );
  }
}

export default App;
