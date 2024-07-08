import { dir } from "i18next";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "../globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Admin Starter",
  description: "Created by Cleidson Oliveira",
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={bricolageGrotesque.variable}>{children}</body>
    </html>
  );
}
