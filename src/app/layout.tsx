import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { MainPage } from "../components/MainPage/MainPage";
import { HeaderPage } from "../components/HeaderPage/HeaderPage";
import { FooterPage } from "../components/FooterPage/FooterPage";
import styles from "./layout.module.css";
import "../stylesGlobal/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "English teaching assistant",
  description: "English teaching assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>
        <div className={styles.wrapPage}>
          <HeaderPage />
          <MainPage>{children}</MainPage>
          <FooterPage />
        </div>
      </body>
    </html>
  );
}
