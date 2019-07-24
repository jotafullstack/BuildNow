import React from "react";
import "./App.css";

// Header
import Header from "./components/header";

// Footer
//import Footer from "./components/footer";

//import { Button } from "react-bootstrap";

var HeaderConfig = {
  isShow: true,
  theme: "light",
  brandShow: true,
  brand: { title: "Logo", url: "" },
  menuShow: true,
  linksShow: true,
  links: [
    { title: "Products", url: "", subItemShow: false },
    { title: "Agency", url: "", subItemShow: false },
    { title: "Docs", url: "", subItemShow: false },
    {
      title: "Contact Us",
      url: "",
      subItemShow: false,
      subItens: [{ title: "Teste", url: "" }, { title: "fcgvnbhmjn", url: "" }]
    }
  ],
  ctaShow: false,
  cta: { title: "More Information", url: "", variant: "primary" }
};

function App() {
  return (
    <div className="App">
      <Header
        isShow={HeaderConfig.isShow}
        theme={HeaderConfig.theme}
        brandShow={HeaderConfig.brandShow}
        brand={HeaderConfig.brand}
        menuShow={HeaderConfig.menuShow}
        linksShow={HeaderConfig.linksShow}
        links={HeaderConfig.links}
        ctaShow={HeaderConfig.ctaShow}
        cta={HeaderConfig.cta}
      />
      {/*<Button variant="success">Success</Button>
      <Footer />*/}
    </div>
  );
}

export default App;
