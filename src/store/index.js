import { createStore } from "redux";

const INITIAL_STATE = {
  PreviewConfig: {
    fullPreview: true
  },
  PageConfig: {
    name: "Logo",
    heading: "Title",
    subHeading: "SubTitle"
  },
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
    ctaShow: true,
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

function reducer(state = INITIAL_STATE, action) {
  console.log(state);
  if (action.type === "FULL_PREVIEW_ACTIVE") {
    return {
      ...state,
      PreviewConfig: {
        ...state.PreviewConfig,
        fullPreview: !action.active
      }
    };
  }
  // Mudar nome do logo / website
  if (action.type === "CHANGE_PAGECONFIG_NAME") {
    return {
      ...state,
      PageConfig: {
        ...state.PageConfig,
        name: action.name
      }
    };
  }

  if (action.type === "CHANGE_PAGECONFIG_HEADING") {
    return {
      ...state,
      PageConfig: {
        ...state.PageConfig,
        heading: action.heading
      }
    };
  }

  if (action.type === "CHANGE_PAGECONFIG_SUBHEADING") {
    return {
      ...state,
      PageConfig: {
        ...state.PageConfig,
        subHeading: action.subHeading
      }
    };
  }
  return state;
}

const store = createStore(reducer);

export default store;
