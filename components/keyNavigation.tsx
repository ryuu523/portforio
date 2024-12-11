"use client"

import { usePathname } from "next/navigation";
import "../styles/keyNavigation.css"



export default function KeyNavigation() {

    const pathname = usePathname()
    return (
        <>
            <div className="keyNavigation">
                <ul>
                    {pathname != "/" && <li>ESC : メニューを開く</li>}
                    <li>ENTER : 決定</li>
                    <li>矢印 : 移動</li>
                    <li>test : test</li>
                </ul>
            </div>
        </>
    );
}
