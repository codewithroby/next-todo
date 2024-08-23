import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "~/style/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next TODO",
  description:
    "Next TODO is a simple task manager that stores your lists securely in PostgreSQL instead of just locally. Access your tasks from anywhere with server-side reliability and seamless syncing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
