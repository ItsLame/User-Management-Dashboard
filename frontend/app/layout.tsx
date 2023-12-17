import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "User Management Dashboard",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen dark:bg-zinc-900">
            <Navbar />
            <main className="container flex-grow px-6 mx-auto max-w-7xl">
              {children}
            </main>
            <footer className="flex items-center justify-center w-full py-3">
              <p className="text-center">Made with 👌 in 2023</p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
