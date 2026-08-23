

export type Language = "EN" | "AM" | "OM";


export const translations = {

  EN: {

    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      news: "News",
      contact: "Contact",
    },

    home: {

      title:
        "Building a better future for Sululta",

      description:
        "Official information, services and development updates from Sululta Sub-City.",

      learnMore:
        "Learn More",

    },


    footer: {

      rights:
        "All rights reserved.",

    }

  },


  AM: {

    nav: {

      home:"መነሻ",

      about:"ስለ እኛ",

      services:"አገልግሎቶች",

      projects:"ፕሮጀክቶች",

      news:"ዜና",

      contact:"ያግኙን",

    },


    home: {

      title:
      "ለሱሉልታ የተሻለ ወደፊት እንገነባለን",

      description:
      "የሱሉልታ ከተማ አስተዳደር መረጃዎችና አገልግሎቶች",

      learnMore:
      "ተጨማሪ ይመልከቱ",

    },


    footer:{
      rights:
      "መብቱ በህግ የተጠበቀ ነው"
    }

  },


  OM: {

    nav:{
      home:"Mana",
      about:"Waa'ee Keenya",
      services:"Tajaajila",
      projects:"Pirojektoota",
      news:"Oduu",
      contact:"Nu qunnamaa",
    },


    home:{

      title:
      "Fuuldura gaarii Sulultaaf ijaaruu",

      description:
      "Odeeffannoo mootummaa fi tajaajila hawaasaa Sululta",

      learnMore:
      "Dabalata ilaali",

    },


    footer:{
      rights:
      "Mirgi hundi eegamaa dha"
    }

  }

} as const;