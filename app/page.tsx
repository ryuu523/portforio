"use client";

import { useCallback, useEffect, useState } from "react";
import "../styles/top.css"
import { useLoading } from "@/context/LoadingContext";
export default function Home() {
  const { jumpUrl } = useLoading()

  const [selectedTriangle, setSelectedTriangle] = useState(0)
  const handleEnterNavigation = useCallback(() => {
    switch (selectedTriangle) {
      case 0:
        jumpUrl("/worldmap")
        break;
      case 1:
        jumpUrl("/")
        break;
      case 2:
        jumpUrl("/")
        break;
    }
  }, [selectedTriangle])
  const handleKeydown = useCallback((e: KeyboardEvent) => {
    let vec = 0
    switch (e.key) {
      case "ArrowUp":
        vec = -1
        break;
      case "ArrowDown":
        vec = 1
        break
      case "Enter":
        handleEnterNavigation()
        break
    }
    setSelectedTriangle((prev) => (prev + vec + 3) % 3)
  }, [handleEnterNavigation])
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown)
  }, [handleKeydown])
  return (
    <div className="back">
      <div className="start">なんかいいの思いついたら書く</div>
      <div className="choices">
        <div className="left">
          <div className={`triangle ${selectedTriangle == 0 ? "active" : ""}`} ></div>
          <div className={`triangle ${selectedTriangle == 1 ? "active" : ""}`} ></div>
          <div className={`triangle ${selectedTriangle == 2 ? "active" : ""}`} ></div>
        </div>
        <div className="right">
          <div className="text" onClick={()=>jumpUrl("/worldmap")}>ぼうけんをはじめる</div>
          <div className="text" onClick={()=>jumpUrl("/")}>せってい</div>
          <div className="text" onClick={()=>jumpUrl("/")}>てすと２</div>
        </div>
      </div>
    </div>
  );
}
