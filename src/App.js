import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            {/* searchPage  */}
            <SearchPage />
          </Route>
          <Route path="/">
            {/* Home (with search) */}

            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
