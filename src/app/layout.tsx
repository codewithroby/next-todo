import type { Metadata } from "next";
import { Inter, Macondo } from "next/font/google";
import { Header } from "~/components/ui/header";
import "~/style/globals.css";

const inter = Inter({ subsets: ["latin"] });
const macondo = Macondo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-handwritten",
});

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
      <Header />
      <body className={`bg-slate-50 ${inter.className} ${macondo.variable}`}>
        {children}
      </body>
    </html>
  );
}
