"use client"
import "~/styles/globals.css";
import { Poppins } from "next/font/google";
import { QueryClientProvider } from "@tanstack/react-query";
import client from "~/utils/client";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: [{ rel: "icon", url: "/images/favicon.webp" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`mx-auto max-w-[1920px] ${poppins.className}`}>
        <QueryClientProvider client={client}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
