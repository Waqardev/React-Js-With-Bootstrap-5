import React from 'react';
import Home from "./Home"
import Service from "./Service"
import Contact from "./Contact"
import About from "./About"
import { Switch, Route, Redirect } from "react-router-dom"

function App() {
  return (
    <div>
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
