export type Language =
  | "EN"
  | "AM"
  | "OM";


const dictionaries = {

  EN: {

    hero: {

      badge: "Discover Sululta",

      texts: [
        "Welcome to Sululta Sub-City",
        "Discover the beauty of Sululta",
        "Experience something different",
        "We are Building a Better Sululta",
        "Science & Technology",
      ],

      description:
        "Discover the people, places, innovation, culture, and experiences that make Sululta a place to explore, connect, and build the future.",

      button:
        "Discover Sululta",

      nature:
        "Nature & Adventure",

      science:
        "Science & Technology",

      culture:
        "Community & Culture",

    },

  },


  AM: {

    hero: {

      badge: "ሱሉልታን ያግኙ",

      texts: [

        "እንኳን ወደ ሱሉልታ ክፍለ ከተማ በደህና መጡ",

        "የሱሉልታን ውበት ያግኙ",

        "የተለየ ልምድ ያግኙ",

        "የተሻለ ሱሉልታ እንገነባለን",

        "ሳይንስና ቴክኖሎጂ",

      ],


      description:
        "የሱሉልታን ህዝብ፣ ባህል፣ ተፈጥሮ፣ ፈጠራ እና የወደፊት ልማት ይወቁ።",


      button:
        "ሱሉልታን ያግኙ",


      nature:
        "ተፈጥሮና ጀብዱ",

      science:
        "ሳይንስና ቴክኖሎጂ",

      culture:
        "ማህበረሰብና ባህል",

    },

  },


  OM: {

    hero: {

      badge:
        "Sululta Beekaa",

      texts: [

        "Baga gara Magaalaa Sulultaa dhuftan",

        "Bareedina Sulultaa argadhaa",

        "Muuxannoo adda ta'e argadhaa",

        "Sululta fooyya'aa ijaaramaa jirra",

        "Saayinsii fi Teeknooloojii",

      ],


      description:
        "Namoota, iddoowwan, aadaa, kalaqaa fi muuxannoo Sululta adda taasisan ilaalaa.",


      button:
        "Sululta Beekaa",


      nature:
        "Uumamaa fi Imala",

      science:
        "Saayinsii fi Teeknooloojii",

      culture:
        "Hawaasa fi Aadaa",

    },

  },


};



export function getDictionary(
  language: Language
) {

  return dictionaries[language];

}