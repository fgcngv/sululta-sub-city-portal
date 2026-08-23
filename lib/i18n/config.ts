

export const languages = [
    {
      code: "en",
      name: "English",
    },
    {
      code: "am",
      name: "አማርኛ",
    },
    {
      code: "om",
      name: "Afaan Oromoo",
    },
  ] as const;
  
  
  export type LanguageCode =
    (typeof languages)[number]["code"];