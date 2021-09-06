import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
      < Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
