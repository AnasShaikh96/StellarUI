import type { Metadata } from "next";
import "./globals.css";
import { interSans } from "@/app/ui/fonts";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "StellarUI",
  description: "Open Source UI Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.className} min-h-svh bg-background font-sans antialiased`}
      >
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
