import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import createHistory from "history/createBrowserHistory";

function App() {
  return (
    <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/home"}
            component={Home}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/about"}
            component={About}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/projects"}
            component={Projects}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/contact"}
            component={Contact}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
