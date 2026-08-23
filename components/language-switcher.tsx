"use client";

import { useLanguage } from "@/app/providers/language-provider";


export function LanguageSwitcher(){

const {
 language,
 setLanguage
}=useLanguage();


return (

<div className="flex gap-2">

<button
onClick={()=>setLanguage("EN")}
>
English
</button>


<button
onClick={()=>setLanguage("OM")}
>
Afaan Oromoo
</button>


<button
onClick={()=>setLanguage("AM")}
>
አማርኛ
</button>


</div>

)

}