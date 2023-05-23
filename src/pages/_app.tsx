import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Poppins } from "next/font/google";
import { api } from "~/utils/api";

import "~/styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import client from "~/utils/client";
const poppin = Poppins({ subsets: ["latin"], weight: ["400"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={client}>
        <main className={poppin.className}>
          <div className="Page-container mx-auto max-w-[1920px]">
            <Component {...pageProps} />
          </div>
        </main>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
