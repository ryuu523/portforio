"use client"
import KeyNavigation from "@/components/keyNavigation";
// import { useRouter, usePathname } from "next/navigation";
import "./globals.css";
import Loading from "@/components/loading";
// import { useState } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const router = useRouter()
  // const pathname = usePathname()
  // const [isLoading, setIsLoading] = useState<boolean>(false)


  return (
    <html lang="ja">
      <body>
        <Loading />
        {children}
        <KeyNavigation />

      </body>
    </html>
  );
}
