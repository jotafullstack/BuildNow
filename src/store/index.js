import { createStore } from "redux";

function reducer() {
  return {
    HeaderConfig: {
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
          subItens: [
            { title: "Teste 1", url: "" },
            { title: "Teste 2", url: "" }
          ]
        },
        { title: "Agency", url: "", subItemShow: false, subItens: [] },
        { title: "Docs", url: "", subItemShow: false, subItens: [] },
        {
          title: "Contact Us",
          url: "",
          subItemShow: false,
          subItens: [
            { title: "Teste 1", url: "" },
            { title: "Teste 2", url: "" }
          ]
        }
      ],
      ctaShow: false,
      cta: { title: "More Information", url: "", variant: "primary" }
    },
    MainConfig: {
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
    },
    FooterConfig: {
      isShow: true
    }
  };
}

const store = createStore(reducer);

export default store;
