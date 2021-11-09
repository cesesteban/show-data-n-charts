import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import store from "./store/store";
import Home from "./views/Home";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={Home} />
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
