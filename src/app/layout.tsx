"use client";

import "@/styles/globals.css";
import { ReactNode } from 'react';
import { Poppins } from "next/font/google";
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ClientProvider } from "@/utils/trpc-provider";
import { siteConfig } from "@/config/site";

// Note: Never import/require the *.min.js files from the npm package.
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

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

   openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.siteUrl}/cover-pic.png`,
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
//   // other: {
//   //   "google-site-verification": "SCtCAdftAAE0UptAZAoIYsHnG7xbuN_ofCaHgfDyjn4", // Google Search Console Verification
//   // },
manifest: "manifest.webmanifest",
 };

interface RootLayoutProps {
  children: ReactNode;
  session: undefined | null | Session;
}

export default function RootLayout(props: RootLayoutProps) {
  const { children, session } = props;
  return (

    <html lang="en">
      <body className={`mx-auto max-w-[1920px] ${poppins.className}`}>
        <ClientProvider>
        <SessionProvider session={session}>
          {children}
          </SessionProvider> 
        </ClientProvider>
      </body>
    </html>


  );
}
