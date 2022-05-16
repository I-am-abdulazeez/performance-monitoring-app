import { SlideFade } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <SlideFade in={true}>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/signup" component={Signup} exact />
          </SlideFade>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
