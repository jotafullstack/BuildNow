import React from "react";
import "./App.css";

// Header
import Header from "./components/header";

// Main
import Main from "./components/main";

//Footer
import Footer from "./components/footer";

// Header Configs
var HeaderConfig = {
  isShow: true,
  theme: "light",
  brandShow: true,
  brand: { title: "Logo", url: "" },
  menuShow: true,
  linksShow: true,
  links: [
    {
      title: "Qualquer Coisa",
      url: "",
      subItemShow: false,
      subItens: [{ title: "Teste 1", url: "" }, { title: "Teste 2", url: "" }]
    },
    { title: "Agency", url: "", subItemShow: false, subItens: [] },
    { title: "Docs", url: "", subItemShow: false, subItens: [] },
    {
      title: "Contact Us",
      url: "",
      subItemShow: false,
      subItens: [{ title: "Teste 1", url: "" }, { title: "Teste 2", url: "" }]
    }
  ],
  ctaShow: false,
  cta: { title: "More Information", url: "", variant: "primary" }
};

// Main Configs
var MainConfig = {
  // Builder Mode
  builder: true,
  isShow: true,
  fluid: true,
  titleShow: true,
  title: {
    description: "Title"
  },
  subTitleShow: true,
  subTitle: {
    description: "Subtitle"
  }
};

var FooterConfig = {
  isShow: true
}

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
      <Main
        isShow={MainConfig.isShow}
        builder={MainConfig.builder}
        fluid={MainConfig.fluid}
        titleShow={MainConfig.titleShow}
        title={MainConfig.title}
        subTitleShow={MainConfig.subTitleShow}
        subTitle={MainConfig.subTitle}
      />
    <Footer
        isShow={FooterConfig.isShow}
    />
  </div>
  );
}

export default App;
