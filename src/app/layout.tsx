import type { Metadata } from "next";
// import { Geist, Geist_Mono, Bricolage_Grotesque, EB_Garamond, Oswald } from "next/font/google";
import { EB_Garamond, Oswald } from "next/font/google";
import "./globals.css";
import { cn } from "../../lib/utils";
import localFont from "next/font/local";


//Fonts
const Mainfont = EB_Garamond({
  subsets: ["latin"]
});

const fontOswald = Oswald({
  subsets: ["latin"],
variable: "--font-oswald"
});

const localfont = localFont({
  src:"../../public/assets/fonts/BricolageGrotesque.ttf",
  variable: "--font-local",
})


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "HaFiZ MuHaMMaD QaSiM",
  description: " HaFiZ MuHaMMaD QaSiM - Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={cn(Mainfont.className, fontOswald.variable, localfont.variable)}>
      
      {/* className={`${Mainfont.className} ${fontOswald} antialiased`} */}
        {children}
      </body>
    </html>
  );
}
