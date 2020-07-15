import React, { createContext, useReducer } from "react";

import { AppReducer } from "./AppReducer";

let initialState = {
  data: {
    men: {
      "air-vapormax-flyknit-3": {
        title: "Air VaporMax Flyknit 3",
        rate: 200,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dicle1kmn9lefvul4umj/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg",
        desc:
          "Be bouncy and buoyant in the Nike Air VaporMax Flyknit 3. The upper features flowing, 2-tone lines of breathable, stretchable Flyknit construction for unique, street-ready style. Revolutionary VaporMax technology keeps spring in your step with toe-to-heel cushioning.",
        showOnHome: true,
      },
      "air-zoom-type": {
        title: "Air Zoom Type",
        rate: 150,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c288e751-4610-4270-a950-3bbd0e75686c/air-zoom-type-mens-shoe-PZR40V.jpg",
        desc:
          "Celebrate Nike innovation and sports heritage in the Nike Air Zoom-Type. It brings a deconstructed, DIY aesthetic to the streets with its zigzag stitching, and colors inspired by Japan's street culture. The stacked foam at the heel and contrast-colored Zoom Air cushioning at the forefoot use the same technology used by the world's elite athletes for an unparalleled ride.",
        showOnHome: false,
      },
      "drop-type-premium": {
        title: "Drop Type Premium",
        rate: 85,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5230ae7e-c4a6-44b9-b18d-4c611dda9799/drop-type-premium-mens-shoe-Q9233z.jpg",
        desc:
          "Well, we finally did it. We dressed the Nike Drop-Type Premium in premium denim with raw edges and accented it with double stitching at the overlays and selvage stitch on the quarter. A stitched-in logo at the tongue is just one of the discoverable details that makes the newest member of the N354 family something special.",
        showOnHome: false,
      },
      "air-max-90": {
        title: "Air Max 90",
        rate: 120,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d9pmaidhdky3d2wclzcc/air-max-90-mens-shoe-xSPlJ1.jpg",
        desc:
          "Clean lines, versatile and timeless—the people's shoe returns with the Nike Air Max 90. Featuring the same iconic Waffle sole, stitched overlays and classic TPU accents you've come to love, it lets you walk among the pantheon of Air.",
        showOnHome: true,
      },
    },
    women: {
      "air-max-2090": {
        title: "Air Max 2090",
        rate: 150,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-2a5d18f6-6d71-4972-84bd-05859f6b9608/air-max-2090-womens-shoe-nk9ZbX.jpg",
        desc:
          "Bring the past into the future with the Nike Air Max 2090, a bold look inspired by the DNA of the iconic Air Max 90. Brand-new Nike Air cushioning underfoot adds unparalleled comfort while transparent mesh and vibrantly colored textile on the upper blend with timeless OG features for an edgy, modernized look.",
        showOnHome: true,
      },
      "air-vapormax-flyknit-3": {
        title: "Air Vapormax Flyknit 3",
        rate: 200,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-b0dd1bdc-1088-45be-b039-fe668d07e319/air-vapormax-flyknit-3-womens-shoe-ZHCbvC.jpg",
        desc:
          "Rebel against gravity in the Nike Air VaporMax Flyknit 3. A high-fashion inspired upper features flowing lines of breathable, stretchable Flyknit material. The revolutionary VaporMax Air technology underfoot keeps a spring in your step from toe-to-heel.",
        showOnHome: true,
      },
      "killshot-og-sp": {
        title: "Killshot OG SP",
        rate: 90,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f7fb2a69-1482-4e8a-9e5e-73a2c1176b4d/killshot-og-sp-mens-shoe-t4btPQ.jpg",
        desc:
          "The original low-profile tennis shoe returns with the Nike Killshot OG SP. This 1-to-1 retro highlights a variety of throwback materials, like an upper combining layers of open mesh, foam, soft suede overlays. The open foam tongue and heritage sole add court-side attitude while the super plush foam insole keeps it comfortable.",

        showOnHome: true,
      },
      "air-force-1-sp": {
        title: "Air Force 1 SP",
        rate: 80,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/gq4jxqkjojggxqo4cnjx/air-force-1-sp-womens-shoe-CsrVcC.jpg",
        desc:
          "The Nike Air Max 90 stays true to its OG roots with the iconic Waffle outsole, stitched overlays and classic TPU accents. Fresh colors give a modern look while Max Air cushioning adds comfort to your journey.",
        showOnHome: false,
      },
    },
    kids: {
      "flex-runner": {
        title: "Flex Runner",
        rate: 50,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/zqk1vdoq2u5vgce0e6l9/flex-runner-baby-toddler-shoe-lG36lt.jpg",
        desc:
          "The Nike Flex Runner has a stretchy slip-on design that is easy to take on and off. Leather on the sides gives structure and support. The sole's soft, durable foam is flexible for little feet as they grow.",
        showOnHome: true,
      },
      "air-max-270-extreme-se": {
        title: "Air Max 270 Extreme SE",
        rate: 80,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/13df5c25-ffb8-44ce-b37e-48fa807716f2/air-max-270-extreme-se-baby-toddler-shoe-ZN77Pt.jpg",
        desc:
          "The Nike Air Max 270 Extreme SE is next-level fun for little ones. Crazy sunrise-inspired colors, our mini Air Max unit and an elastic strap (meaning no laces needed)? Count us in.",
        showOnHome: true,
      },
      "huarache-edge": {
        title: "Huarache E.D.G.E.",
        rate: 35,
        imgSrc:
          "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/iqwda1cwrvc6kmtzugzg/huarache-edge-infant-toddler-shoe-f8CDpF.jpg",
        desc:
          "The Nike Huarache E.D.G.E turns itself inside out to show all the inner parts of a shoe. You can see the straps that wrap around little feet to keep them in place. The slip-on design is made of comfortable stretchy material.",
        showOnHome: true,
      },
      "speed-turf": {
        title: "Speed Turf",
        rate: 50,
        imgSrc:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ukjlmqilevyll2xo4bzo/speed-turf-infant-toddler-shoe-PMhw97.jpg",
        desc:
          "The Nike Speed Turf has soft foam cushioning and rubber traction for all day comfort. and a rubber outsole helps provide additional traction. A strap makes it easy to take it on and off.",
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
