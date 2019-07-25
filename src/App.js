import React from "react";
import "./App.css";

// Header
import Header from "./components/header";

// Main
import Main from "./components/main";

//Footer
import Footer from "./components/footer";

import { Provider } from "react-redux";

import store from "./store";

var FooterConfig = {
  isShow: true
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
