"use client"
import KeyNavigation from "@/components/keyNavigation";
// import { useRouter, usePathname } from "next/navigation";
import "./globals.css";
import Loading from "@/components/loading";
import { LoadingProvider, useLoading } from "@/context/LoadingContext";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
// import { useState } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <LoadingProvider>
          <LoadingComponent />
          {children}
          <KeyNavigation />
        </LoadingProvider>

      </body>
    </html>
  );
}
function LoadingComponent() {
  const { oldPathname, setOldPathname, isLoading, setIsLoading, direction, nextUrl, setDirection } = useLoading();
  const pathname = usePathname()
  const router = useRouter()
  const [isPageMove, setIsPageMove] = useState<boolean>(false)
  useEffect(() => {
    if (!isPageMove) return
    setDirection("in")
    setOldPathname(nextUrl)
    router.push(nextUrl)

  }, [isPageMove])
  useEffect(() => {

    if (pathname === "/" && oldPathname === "/") return
    setIsPageMove(false)
    setIsLoading(true)

  }, [pathname])
  if (!isLoading && isPageMove) return <div className="bg-black w-dvw h-dvh z-99999"></div>;
  if (!isLoading) return null
  return <Loading direction={direction} nextPage={() => setIsPageMove(true)} />;

}