import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

//styles
import "./styles/style.css";

//pages
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
    </Router>
  );
};

export default App;
