import type { Metadata } from "next";
import { Newsreader, Noto_Sans, Noto_Sans_Khmer } from "next/font/google";
import "./globals.css";
import { SectionToneProvider } from "@/components/providers/SectionToneProvider";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-newsreader",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSansKhmer = Noto_Sans_Khmer({
  subsets: ["khmer"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-khmer",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CamFEX — Cambodia Food & Beverage Expo",
  description:
    "Cambodia's food and beverage export platform. Six trade shows, seven programmes. Edition 1, Q4 2027, Phnom Penh.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${notoSans.variable} ${notoSansKhmer.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-body">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SectionToneProvider>
          <AnnouncementBar />
          <Nav />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SectionToneProvider>
      </body>
    </html>
  );
}
