import React from "react";
import "./App.css";

import FirstStep from "./components/builderSteps/firstStep";

import { Provider } from "react-redux";

import store from "./store";

var FooterConfig = {
  isShow: true
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <FirstStep />
      </Provider>
    </div>
  );
}

export default App;
