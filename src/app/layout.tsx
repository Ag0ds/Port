// RootLayout.tsx (ou o nome do seu arquivo de layout)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Headermobile from "@/components/header-mobile";
import { getServerSession } from "next-auth";
import SideNav from "@/components/side-nav";
import PageWrapper from "@/components/page-wrapper";
import MarginWidthWrapper from "@/components/margin-width-wrapper";
import Providers from "@/components/Providers"; // ajuste o caminho conforme necessário

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Obtenha a sessão dentro da função assíncrona
  const session = await getServerSession();

  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers session={session}>
          {session ? (
            <div className="flex">
              <SideNav />
              <main className="flex-1">
                <MarginWidthWrapper>
                  <Header />
                  <Headermobile />
                  <PageWrapper>{children}</PageWrapper>
                </MarginWidthWrapper>
              </main>
            </div>
          ) : (
            <>{children}</>
          )}
        </Providers>
      </body>
    </html>
  );
}
