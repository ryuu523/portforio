"use client"
import { useRouter, usePathname } from "next/navigation";
import "./globals.css";
import { useState } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
