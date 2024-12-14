"use client"
import KeyNavigation from "@/components/keyNavigation";
// import { useRouter, usePathname } from "next/navigation";
import "./globals.css";
import Loading from "@/components/loading";
import { LoadingProvider, useLoading } from "@/context/LoadingContext";
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
  const { isLoading, direction } = useLoading();
  
  if (!isLoading) return null;
  
  console.log(isLoading, direction);
  return <Loading direction={direction} />;
}