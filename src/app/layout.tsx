"use client";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { ClientProvider } from "@/utils/trpc-provider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

// export const metadata = {
//   title: "Ecommerce Inside",
//   description:
//     "Ecommerce Inside is a full-service digital solutions agency based in USA specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
//     icons: [{ rel: "icon", url: "/images/favicon.webp" }]
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
      <body className={`mx-auto max-w-[1920px] ${poppins.className}`}>
      <ClientProvider>
        {children}
        </ClientProvider>
      </body>
    </html>
  );
}
