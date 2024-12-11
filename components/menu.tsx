"use client"
import { useCallback, useEffect, useState } from "react";
import "../styles/menu.css"
import { useRouter } from "next/navigation";
import Link from "next/link"


export default function Menu() {
    const router = useRouter();

    const [selectedTriangle, setSelectedTriangle] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const handleEnterNavigation = useCallback(() => {
        switch (selectedTriangle) {
            case 0:
                router.push("/")
                break;
            case 1:
                router.push("/worldmap")
                break;
            case 2:
                router.push("/about")
                break;
            case 3:
                router.push("/skills")
                break;
            case 4:
                router.push("/contact")
                break;

        }
    }, [selectedTriangle])
    const handleKeydown = useCallback((e: KeyboardEvent) => {
        let vec = 0
        if (e.key === 'Escape') {
            
            if(!isActive){
                setSelectedTriangle(0)
            }
            setIsActive((prev)=>!prev)
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

    }, [handleEnterNavigation,isActive])
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
                    <Link className="text" href="/">タイトルに戻る</Link>
                    <Link className="text" href="/worldmap">WORLDMAPに行く</Link>
                    <Link className="text" href="/about">ABOUTに行く</Link>
                    <Link className="text" href="/skills">SKILLSに行く</Link>
                    <Link className="text" href="/contact">CONTACTに行く</Link>
                </div >
            </div>
            }
            <div className="keyNavigation">
                <ul>
                    <li>ESC : メニューを開く</li>
                    <li>test : test</li>
                    <li>test : test</li>
                    <li>test : test</li>
                </ul>
            </div>
        </>
    );
}
