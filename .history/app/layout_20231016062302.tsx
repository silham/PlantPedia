import "./globals.css";
import "remixicon/fonts/remixicon.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantpedia",
  description: "Growing knowledge, harvesting success",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
