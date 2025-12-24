import type { Metadata, Viewport } from "next";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import "./globals.css";

export const metadata: Metadata = {
  title: "PropertyConnect - Find Your Dream Property",
  description: "AI-powered property search platform with verified listings and community insights",
  keywords: ["real estate", "property", "rent", "buy","sell","house", "apartment"],
  authors: [{ name: "PropertyConnect" }],
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
