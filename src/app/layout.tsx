import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PhenoShop",
  description: "Next.js 14 app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
