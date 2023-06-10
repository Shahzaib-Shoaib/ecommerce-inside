import { siteConfig } from "./site"

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Wordpress", "Shopify", "Ecommerce"],
  authors: [
    {
      name: "Ecommerce Inside",
      url: siteConfig.social.github,
    },
  ],
  creator: "Ecommerce Inside",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  //metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.siteUrl}/cover-pic.jpg`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "Ecommerce Inside",
  },
  icons: {
    icon: "/favicon.ico",
    //shortcut: "/favicon-16x16.png",
    //apple: "/apple-touch-icon.png",
  },
  // other: {
  //   "google-site-verification": "SCtCAdftAAE0UptAZAoIYsHnG7xbuN_ofCaHgfDyjn4", // Google Search Console Verification
  // },
  manifest: "manifest.webmanifest",
};



// title: {
//   default: siteConfig.name,
//   template: `%s - ${siteConfig.name}`,
// },
// description: siteConfig.description,
// keywords: [
//   "Next.js",
//   "React",
//   "Tailwind CSS",
//   "Server Components",
//   "TypeScript",
// ],
// authors: [
//   {
//     name: siteConfig.author,
//     url: "https://sameerjadav.me",
//   },
// ],
// creator: siteConfig.author,
// themeColor: [
//   { media: "(prefers-color-scheme: light)", color: "white" },
//   { media: "(prefers-color-scheme: dark)", color: "black" },
// ],
// openGraph: {
//   type: "website",
//   locale: "en_US",
//   url: siteConfig.url,
//   title: siteConfig.name,
//   description: siteConfig.description,
//   siteName: siteConfig.name,
//   images: [
//     {
//       url: siteConfig.ogImage,
//       width: 1200,
//       height: 630,
//       alt: siteConfig.name,
//     },
//   ],
// },
// twitter: {
//   card: "summary_large_image",
//   title: siteConfig.name,
//   description: siteConfig.description,
//   images: [siteConfig.ogImage],
//   creator: "@SameerJadav_",
// },
// manifest: `${siteConfig.url}/site.webmanifest`,
// }