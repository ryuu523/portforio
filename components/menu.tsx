"use client"
import { useCallback, useEffect, useState } from "react";
import "../styles/menu.css"
import { useLoading } from "@/context/LoadingContext";
import { useMenu } from "@/context/MenuContext";


export default function Menu() {
    const { jumpUrl } = useLoading()

    const [selectedTriangle, setSelectedTriangle] = useState(0)
    const {isActive,changeActive}=useMenu()
    const handleEnterNavigation = useCallback(() => {
        switch (selectedTriangle) {
            case 0:
                jumpUrl("/")
                break;
            case 1:
                jumpUrl("/worldmap")
                break;
            case 2:
                jumpUrl("/about")
                break;
            case 3:
                jumpUrl("/skills")
                break;
            case 4:
                jumpUrl("/contact")
                break;
        }
    }, [selectedTriangle])
    const handleKeydown = useCallback((e: KeyboardEvent) => {
        let vec = 0
        if (e.key === 'Escape') {
            if (!isActive) {
                setSelectedTriangle(0)
            }
            changeActive()
        }

        if (!isActive) return

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
        setSelectedTriangle((prev) => (prev + vec + 5) % 5)

    }, [handleEnterNavigation, isActive])
    useEffect(() => {
        window.addEventListener("keydown", handleKeydown);
        return () => window.removeEventListener("keydown", handleKeydown)
    }, [handleKeydown])
    return (
        <>
            {isActive && <div className="menu">

                <div className="left">
                    <div className={`triangle ${selectedTriangle == 0 ? "active" : ""}`} ></div>
                    <div className={`triangle ${selectedTriangle == 1 ? "active" : ""}`} ></div>
                    <div className={`triangle ${selectedTriangle == 2 ? "active" : ""}`} ></div>
                    <div className={`triangle ${selectedTriangle == 3 ? "active" : ""}`} ></div>
                    <div className={`triangle ${selectedTriangle == 4 ? "active" : ""}`} ></div>
                </div>
                <div className="right">
                    <div className="text" onClick={() => jumpUrl("/")}>タイトルに戻る</div>
                    <div className="text" onClick={() => jumpUrl("/worldmap")}>WORLDMAPに行く</div>
                    <div className="text" onClick={() => jumpUrl("/about")}>ABOUTに行く</div>
                    <div className="text" onClick={() => jumpUrl("/skills")}>SKILLSに行く</div>
                    <div className="text" onClick={() => jumpUrl("/contact")}>CONTACTに行く</div>
                </div >
            </div>
            }
        </>
    );
}
