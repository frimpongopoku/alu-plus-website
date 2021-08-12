import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/About Us/AboutUs";
import ApplicationPage from "./pages/Application/ApplicationPage";
import AcademicCalendar from "./pages/Calendar/AcademicCalendar";
import CampusPage from "./pages/Campus Page/CampusPage";
import Creators from "./pages/Creators/Creators";
import Error from "./pages/Error/Error";
import Gallery from "./pages/Gallery/Gallery";
import LandingPage from "./pages/Landing/LandingPage";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* <Route exact path="/student-life" component={StudentLife} /> */}
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/academics" component={AcademicCalendar} />
          <Route exact path="/creators" component={Creators} />
          <Route exact path="/apply" component={ApplicationPage} />
          <Route exact path="/campus/:name/" component={CampusPage} />
          <Route exact path="/gallery" component={Gallery} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
