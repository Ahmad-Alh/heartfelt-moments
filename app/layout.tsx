import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heartfelt Moments",
  description:
    "Event Management in the UAE - Birthdays, Gatherings,Parties & Corporate Events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
