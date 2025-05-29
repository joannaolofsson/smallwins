import type { Metadata } from "next";
import { Manrope} from "next/font/google";
import Header from "./components/header";
import { FutureProvider } from "./context/FutureContext";
import "./globals.css";

const manropeSans = Manrope({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Small win tracker",
  description: "Track your small wins to reach your future you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manropeSans} antialiased bg-gradient-to-br from-[#A8D5BA] to-[#D9F1E5] min-h-screen`}
      > 
      <FutureProvider>
      <Header />
        {children}
      </FutureProvider>
      </body>
    </html>
  );
}
