import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Home} />
          <Link to="/home" />
          <Link to="/about" />
          <Link to="/projects" />
          <Link to="/contact" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
