// export type Language =
//   | "EN"
//   | "AM"
//   | "OM";


// const dictionaries = {

//   EN: {

//     hero: {

//       badge: "Discover Sululta",

//       texts: [
//         "Welcome to Sululta Sub-City",
//         "Discover the beauty of Sululta",
//         "Experience something different",
//         "We are Building a Better Sululta",
//         "Science & Technology",
//       ],

//       description:
//         "Discover the people, places, innovation, culture, and experiences that make Sululta a place to explore, connect, and build the future.",

//       button:
//         "Discover Sululta",

//       nature:
//         "Nature & Adventure",

//       science:
//         "Science & Technology",

//       culture:
//         "Community & Culture",

//     },

//   },


//   AM: {

//     hero: {

//       badge: "ሱሉልታን ያግኙ",

//       texts: [

//         "እንኳን ወደ ሱሉልታ ክፍለ ከተማ በደህና መጡ",

//         "የሱሉልታን ውበት ያግኙ",

//         "የተለየ ልምድ ያግኙ",

//         "የተሻለ ሱሉልታ እንገነባለን",

//         "ሳይንስና ቴክኖሎጂ",

//       ],


//       description:
//         "የሱሉልታን ህዝብ፣ ባህል፣ ተፈጥሮ፣ ፈጠራ እና የወደፊት ልማት ይወቁ።",


//       button:
//         "ሱሉልታን ያግኙ",


//       nature:
//         "ተፈጥሮና ጀብዱ",

//       science:
//         "ሳይንስና ቴክኖሎጂ",

//       culture:
//         "ማህበረሰብና ባህል",

//     },

//   },


//   OM: {

//     hero: {

//       badge:
//         "Sululta Beekaa",

//       texts: [

//         "Baga gara Magaalaa Sulultaa dhuftan",

//         "Bareedina Sulultaa argadhaa",

//         "Muuxannoo adda ta'e argadhaa",

//         "Sululta fooyya'aa ijaaramaa jirra",

//         "Saayinsii fi Teeknooloojii",

//       ],


//       description:
//         "Namoota, iddoowwan, aadaa, kalaqaa fi muuxannoo Sululta adda taasisan ilaalaa.",


//       button:
//         "Sululta Beekaa",


//       nature:
//         "Uumamaa fi Imala",

//       science:
//         "Saayinsii fi Teeknooloojii",

//       culture:
//         "Hawaasa fi Aadaa",

//     },

//   },


// };



// export function getDictionary(
//   language: Language
// ) {

//   return dictionaries[language];

// }




import { cookies } from "next/headers";

import en from "./en";
import am from "./am";
import om from "./om";

/*
|--------------------------------------------------------------------------
| Supported languages
|--------------------------------------------------------------------------
*/

export const languages = ["en", "am", "om"] as const;

export type Language = (typeof languages)[number];

/*
|--------------------------------------------------------------------------
| Default language
|--------------------------------------------------------------------------
*/

export const DEFAULT_LANGUAGE: Language = "en";

/*
|--------------------------------------------------------------------------
| Dictionaries
|--------------------------------------------------------------------------
*/

const dictionaries = {
  en,
  am,
  om,
} as const;

/*
|--------------------------------------------------------------------------
| Check language
|--------------------------------------------------------------------------
*/

export function isLanguage(
  value: string | undefined | null
): value is Language {
  return (
    value === "en" ||
    value === "am" ||
    value === "om"
  );
}

/*
|--------------------------------------------------------------------------
| Get dictionary
|--------------------------------------------------------------------------
*/

export function getDictionary(language: Language) {
  return dictionaries[language];
}

/*
|--------------------------------------------------------------------------
| Get current language from cookie
|--------------------------------------------------------------------------
|
| The LanguageSwitcher writes:
|
| language=en
| language=am
| language=om
|
| This function reads that cookie on the server.
|
*/

export async function getLanguage(): Promise<Language> {
  const cookieStore = await cookies();

  const languageCookie =
    cookieStore.get("language")?.value;

  if (isLanguage(languageCookie)) {
    return languageCookie;
  }

  return DEFAULT_LANGUAGE;
}

/*
|--------------------------------------------------------------------------
| Get current dictionary
|--------------------------------------------------------------------------
|
| This is the easiest function to use inside Server Components.
|
| Example:
|
| const t = await getCurrentDictionary();
|
| <Hero t={t} />
|
*/

export async function getCurrentDictionary() {
  const language = await getLanguage();

  return getDictionary(language);
}

