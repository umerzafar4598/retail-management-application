import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });


export const metadata: Metadata = {
  title: "Hamid Mobiles and Communications",
  description: "Retail Management Applications | Hamid Mobiles and Communications",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", montserrat.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
