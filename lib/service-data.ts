

import {
    Building2,
    FileText,
    HeartPulse,
    GraduationCap,
    Landmark,
    Users,
  } from "lucide-react";
  
  export type ServiceItem = {
    id: string;
    title: string;
    description: string;
    href: string;
    icon: typeof Building2;
    placeholder?: boolean;
  };
  
  export const serviceItems: ServiceItem[] = [
    {
      id: "service-01",
      title: "E-Conference",
      description: "Access Digital Conference Platform.",
      href: "https://shaggarcity.oo.et/?module=login",
      icon: Landmark,
      placeholder: true,
    },
    {
      id: "service-02",
      title: "Digital Government Service",
      description: "Access all government services from the comfort of you rhome or office.Fast,Secure,and convenient.",
      href: "https://eservice.shaggarcity.et/",
      icon: Building2,
      placeholder: true,
    },
    {
      id: "service-03",
      title: "E-Envestment",
      description: "Access Digital Envestment System.",
      href: "https://investment.shaggarcity.et/login",
      icon: GraduationCap,
      placeholder: true,
    },
    {
      id: "service-04",
      title: "E-Trade",
      description: "Online Trade Registration and Licensing System (OTRLS)",
      href: "https://etrade.gov.et/",
      icon: HeartPulse,
      placeholder: true,
    },
    {
      id: "service-05",
      title: "E-Library",
      description: "Digital Library.",
      href: "http://196.189.124.193:8000/login",
      icon: FileText,
      placeholder: true,
    },
    {
      id: "service-06",
      title: "E-Land",
      description: "Digital Land Administration.",
      href: "http://196.189.124.252/sheger/Account/Login",
      icon: Users,
      placeholder: true,
    },
  ];