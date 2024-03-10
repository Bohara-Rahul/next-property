import "@/app/assets/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PropertyPlus | Find the perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};

export default function MainLayout({
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
