import SportsClient from "./sports-client";
import { getCurrentDictionary } from "@/lib/i18n/index";

export default async function SportsPage() {
  const dictionary = await getCurrentDictionary();

  return <SportsClient dictionary={dictionary} />;
}