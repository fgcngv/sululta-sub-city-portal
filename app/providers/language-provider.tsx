"use client";


import {
createContext,
useContext,
useState
} from "react";


import {
Language
} from "@/lib/translations";


type ContextType={

language:Language;

setLanguage:
(language:Language)=>void;

};


const LanguageContext =
createContext<ContextType>({
language:"EN",
setLanguage:()=>{}
});


export function LanguageProvider({
children
}:{
children:React.ReactNode
}){


const [language,setLanguage]=
useState<Language>("EN");


return (

<LanguageContext.Provider
value={{
language,
setLanguage
}}
>

{children}

</LanguageContext.Provider>

)

}


export function useLanguage(){

return useContext(LanguageContext);

}