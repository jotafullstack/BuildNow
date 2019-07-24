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
          { title: "Products", url: "", subItem: false },
          { title: "Agency", url: "", subItem: false },
          { title: "Docs", url: "", subItem: false },
          { title: "Contact Us", url: "", subItem: true }
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
