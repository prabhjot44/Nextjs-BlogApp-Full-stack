import Navbar from "@/components/Navbar";
import { AuthProvider } from "./Providers";
import "./globals.css";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TopicHub – Share & Discover Topics",
  description: "A modern platform to add, browse, and manage topics collaboratively.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body style={{ margin: 0, minHeight: "100vh", background: "#0f0f1a" }}>
        <AppRouterCacheProvider>
          <AuthProvider>
            <Navbar />
            <main style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 48px" }}>
              {children}
            </main>
          </AuthProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
