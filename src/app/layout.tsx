import "./globals.css";
import { Albert_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const albertSanse = Albert_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "AI Getting Started",
  description: "Help you setup an AI project with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={albertSanse.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
