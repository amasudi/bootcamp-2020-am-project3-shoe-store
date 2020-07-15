import React, { createContext, useReducer } from "react";

import { AppReducer } from "./AppReducer";

let initialState = {
  data: {
    men: {
      "air-vapormax-flyknit-3": {
        title: "Nike Air VaporMax Flyknit 3",
        rate: 200,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dicle1kmn9lefvul4umj/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg",
        showOnHome: true,
      },
      "air-zoom-type": {
        title: "Air Zoom Type",
        rate: 150,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c288e751-4610-4270-a950-3bbd0e75686c/air-zoom-type-mens-shoe-PZR40V.jpg",
        showOnHome: false,
      },
      "drop-type-premium": {
        title: "Drop Type Premium",
        rate: 85,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5230ae7e-c4a6-44b9-b18d-4c611dda9799/drop-type-premium-mens-shoe-Q9233z.jpg",
        showOnHome: false,
      },
      "air-max-90": {
        title: "Air Max 90",
        rate: 120,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d9pmaidhdky3d2wclzcc/air-max-90-mens-shoe-xSPlJ1.jpg",
        showOnHome: true,
      },
    },
    women: {
      "air-max-2090": {
        title: "Air Max 2090",
        rate: 150,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-2a5d18f6-6d71-4972-84bd-05859f6b9608/air-max-2090-womens-shoe-nk9ZbX.jpg",
        showOnHome: true,
      },
      "air-vapormax-flyknit-3": {
        title: "Air Vapormax Flyknit 3",
        rate: 200,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-b0dd1bdc-1088-45be-b039-fe668d07e319/air-vapormax-flyknit-3-womens-shoe-ZHCbvC.jpg",
        showOnHome: true,
      },
      "killshot-og-sp": {
        title: "Killshot OG SP",
        rate: 90,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f7fb2a69-1482-4e8a-9e5e-73a2c1176b4d/killshot-og-sp-mens-shoe-t4btPQ.jpg",
        showOnHome: true,
      },
      "air-force-1-sp": {
        title: "Air Force 1 SP",
        rate: 80,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/gq4jxqkjojggxqo4cnjx/air-force-1-sp-womens-shoe-CsrVcC.jpg",
        showOnHome: false,
      },
    },
    kids: {
      "flex-runner": {
        title: "Flex Runner",
        rate: 50,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/zqk1vdoq2u5vgce0e6l9/flex-runner-baby-toddler-shoe-lG36lt.jpg",
        showOnHome: true,
      },
      "air-max-270-extreme-se": {
        title: "Air Max 270 Extreme SE",
        rate: 80,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/13df5c25-ffb8-44ce-b37e-48fa807716f2/air-max-270-extreme-se-baby-toddler-shoe-ZN77Pt.jpg",
        showOnHome: true,
      },
      "huarache-edge": {
        title: "Huarache E.D.G.E.",
        rate: 35,
        imgSrc:
          "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/iqwda1cwrvc6kmtzugzg/huarache-edge-infant-toddler-shoe-f8CDpF.jpg",
        showOnHome: true,
      },
      "speed-turf": {
        title: "Speed Turf",
        rate: 50,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ukjlmqilevyll2xo4bzo/speed-turf-infant-toddler-shoe-PMhw97.jpg",
        showOnHome: false,
      },
    },
  },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  let [state] = useReducer(AppReducer, initialState);

  let handleActions = (type) => {
    switch (type) {
      default:
    }
  };

  return (
    <GlobalContext.Provider value={{ data: state.data, handleActions }}>
      {children}
    </GlobalContext.Provider>
  );
};
