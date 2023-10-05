import "./globals.css";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Bazar libre",
  description: "Bazar con todo tipo de productos",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="grid w-screen h-screen">{children}</body>
    </html>
  );
}
