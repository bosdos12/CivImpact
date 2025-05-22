import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "CivImpact",
  description: "E-Government Feedback System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
