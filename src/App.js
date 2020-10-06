import React, { Component } from "react";
import "./App.css";
import Increment from "./components/increment";
import Form from "./components/form";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/form" component={Form} />
            <Route path="/increment" component={Increment} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
