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
        brandShow={true}
        brand={{ title: "Logo", url: "" }}
        menuShow={true}
        linksShow={true}
        links={[
          { title: "Products", url: "", subItemShow: false },
          { title: "Agency", url: "", subItemShow: false },
          { title: "Docs", url: "", subItemShow: false },
          {
            title: "Contact Us",
            url: "",
            subItemShow: false,
            subItens: [
              { title: "Teste", url: "" },
              { title: "fcgvnbhmjn", url: "" }
            ]
          }
        ]}
        ctaShow={false}
        cta={{ title: "More Information", url: "", variant: "primary" }}
      />
      {/*<Button variant="success">Success</Button>
      <Footer />*/}
    </div>
  );
}

export default App;
