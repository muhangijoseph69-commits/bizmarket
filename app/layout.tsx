import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BizMarket",
  description: "Global Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
