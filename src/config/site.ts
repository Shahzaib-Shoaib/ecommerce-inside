import { env } from "@/env.mjs"

// export type SiteConfig = {
//   name: string
//   description: string
//   siteUrl: string
//   social: {
//     twitter: string
//     github: string
//   }
//   gradient: string
// }

//export const siteConfig: SiteConfig = {
  
export const siteConfig = {
  name: "Ecommerce Inside",
  description: "Ecommerce Inside is a full-service digital solutions agency based in USA specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
  siteUrl: env.NEXT_PUBLIC_APP_URL,
  //ogImage: "https://react-three-learn.sameerjadav.me/og.png",
  author: {
    name: `Ecommerce Inside`,
    twitter: ``,
  },
  social: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
  },
}

 export type SiteConfig = typeof siteConfig