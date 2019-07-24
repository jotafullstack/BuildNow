import React from "react";
import "./App.css";

// Header
import Header from "./components/header";

// Footer
//import Footer from "./components/footer";

//import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header
        isShow={true}
        theme={"light"}
        menuShow={true}
        linksShow={true}
        links={[
          { title: "Products", url: "" },
          { title: "Agency", url: "" },
          { title: "Docs", url: "" },
          { title: "Contact Us", url: "" }
        ]}
        ctaShow={true}
        cta={{ title: "More Information", url: "", variant: "primary" }}
      />
      {/*<Button variant="success">Success</Button>
      <Footer />*/}
    </div>
  );
}

export default App;
