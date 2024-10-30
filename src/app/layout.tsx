import "./globals.css";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verbalize",
  description: "Página para aprendizado de idiomas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f6f3f0]">
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
