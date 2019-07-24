import React from "react";
import "./App.css";

// Header
import Header from "./components/header";

// Footer
import Footer from "./components/footer";

import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header
        isShow={true}
        theme={"light"}
        links={[{ title: "home", url: "" }, { title: "contact", url: "" }]}
      />
      <Button variant="success">Success</Button>
      <Footer />
    </div>
  );
}

export default App;
