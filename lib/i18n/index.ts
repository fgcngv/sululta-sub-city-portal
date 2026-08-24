

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

export const DEFAULT_LANGUAGE: Language = "om";

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

