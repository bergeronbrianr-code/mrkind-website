import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import HashScrollFix from "@/components/HashScrollFix";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mr. Kind | Brian Bergeron — Indie Rock & Folk-Americana",
  description:
    "Mr. Kind is Brian Bergeron — singer, songwriter, and guitarist based in the DMV. Indie rock, folk-Americana, house concerts, and private events. If you've seen Brian Bergeron perform, you're in the right place.",
  keywords: [
    "Mr. Kind",
    "Brian Bergeron",
    "mrkindmusic",
    "indie rock",
    "folk americana",
    "house concerts",
    "DMV musician",
    "DC singer songwriter",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">
        <Nav />
        <HashScrollFix />
        {children}
      </body>
    </html>
  );
}
