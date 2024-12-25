"use client"
import KeyNavigation from "@/components/keyNavigation";
// import { useRouter, usePathname } from "next/navigation";
import "./globals.css";
import Loading from "@/components/loading";
import { LoadingProvider, useLoading } from "@/context/LoadingContext";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Menu from "@/components/menu";
import { MenuProvider, useMenu } from "@/context/MenuContext";
// import { useState } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  return (
    <html lang="ja">
      <body className="bg-zinc-900
      ">
        <LoadingProvider>
          <MenuProvider>

            <LoadingComponent />
            
            {pathname !== "/" && <Menu />}
            {children}

            <KeyNavigation />
          </MenuProvider>
        </LoadingProvider>

      </body>
    </html>
  );
}

function LoadingComponent() {
  const { setIsAnimation, oldPathname, setOldPathname, isLoading, setIsLoading, direction, nextUrl, setDirection } = useLoading();
  const {setIsActive}=useMenu()
  const pathname = usePathname()
  const router = useRouter()
  const [isPageMove, setIsPageMove] = useState<boolean>(false)
  useEffect(() => {
    if (!isPageMove) return

    setDirection("in")
    setOldPathname(pathname)
    router.push(nextUrl)

  }, [isPageMove])
  useEffect(() => {
    setIsActive(false)
    if (pathname === "/" && oldPathname === "/") return
    setIsPageMove(false)
    setIsLoading(true)

  }, [pathname])
  if (!isLoading && isPageMove) return <div className="bg-black w-dvw h-dvh z-50 top-0 left-0 fixed"></div>;
  if (!isLoading) return null
  return <Loading direction={direction} nextPage={() => setIsPageMove(true)} endAnimation={() => setIsAnimation(false)} />;

}