import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home"
import Service from "./Service"
import Contact from "./Contact"
import About from "./About"
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
