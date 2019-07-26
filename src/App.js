import React from "react";
import "./App.css";

import Builder from "./components/builderSteps/builder";

import { Provider } from "react-redux";

import store from "./store";

var FooterConfig = {
  isShow: true
};

const App = ({ PageConfig, dispatch }) => {
  return (
    <div>
      <div className="App">
        <Provider store={store}>
          <Builder />
        </Provider>
      </div>
    </div>
  );
};

export default App;
