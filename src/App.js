import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./Components/Detail/Detail";
import Page from "./Components/Page/Page";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/drink/:id" component={Detail} />
          <Route exact path="/" component={Page} />
        </Switch>
      </Router>   
    </div>
  );
}

export default App;
