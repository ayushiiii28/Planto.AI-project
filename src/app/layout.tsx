// layout.tsx

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider attribute="class">
      <html lang="en" className={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Code Editor</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />

        </Head>

        <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <header className="bg-gray-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-2xl font-semibold">
                Code Editor
              </Link>
              <nav>
                <Link href="/" className="mx-2 hover:text-gray-400">
                  Home
                </Link>
                <Link href="/about" className="mx-2 hover:text-gray-400">
                  About
                </Link>
              </nav>
            </div>
          </header>

          <main className="container mx-auto p-4">{children}</main>

          <footer className="bg-gray-800 text-white text-center py-4">
            <p>&copy; 2025 Code Editor. All rights reserved.</p>
          </footer>
        </body>
      </html>
    </ThemeProvider>
  );
};

export default Layout;
