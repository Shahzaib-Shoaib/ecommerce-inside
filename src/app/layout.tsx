'use client'
import ContactDialog from '@/components/ContactDialog';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TakeOurWordsCTA from '@/components/TakeOurWordsCTA';
import { Toaster } from '@/components/ui/Toaster';
import '@/styles/globals.css';
import RQqueryClient from '@/utils/RQclient';
import { ClientProvider } from '@/utils/trpc-provider';
import { cn } from '@/utils/utils';
import { QueryClientProvider } from '@tanstack/react-query';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={RQqueryClient}>
    <html lang="en" className={cn('mx-auto max-w-[1920px]', poppins.className)}>
      <body className="relative mx-auto min-h-screen  pt-[99px] antialiased">
        <ContactDialog />
        <Navbar />
        <ClientProvider session={undefined}>{children}</ClientProvider>
        {/* Take Our Word for It */}
        <TakeOurWordsCTA />
        <Footer />
        <Toaster />
      </body>
    </html>
    </QueryClientProvider>
  );
}
