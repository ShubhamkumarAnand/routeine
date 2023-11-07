import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Navigation from "~/components/Navigation";
import Logo from "~/components/Logo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Routeine",
  description: "Track daily activities and focus on specific tasks for the day",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} antialiased`}>
        <main>
          <Logo />
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
