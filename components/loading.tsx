"use client"

import { cn } from "@/utils"
import { useCallback, useEffect, useState } from "react";
// import "../styles/loading.css"



const SIZE: number = 20
let pR = { x: SIZE, y: 0 }, pL = { x: -1, y: SIZE - 1 };
let deg = 0;
export default function Loading() {
    const [tiles, setTiles] = useState<boolean[][]>(Array.from({ length: SIZE }, () => Array.from({ length: SIZE }, () => false)))
    const handlekeydown = useCallback(() => {
        console.log("aa");
        setTiles((prev) => {
            const copy = structuredClone(prev);
            const rad = deg * (Math.PI / 180);
            const nR = {
                x: pR.x + Math.round(Math.sin(rad - Math.PI / 2)),
                y: pR.y + Math.round(Math.sin(rad))
            };
            const nL = {
                x: pL.x + Math.round(Math.cos(rad)),
                y: pL.y + Math.round(Math.cos(rad + Math.PI / 2))
            };

            if (nR.x >= 0 && nR.x < SIZE && nR.y >= 0 && nR.y < SIZE && !copy[nR.y][nR.x]) {
                pR = nR;
                pL = nL;
                copy[nL.y][nL.x] = true;
                copy[nR.y][nR.x] = true;
            }
            else {
                deg += 90
            }
            console.log(copy);

            return copy;
        });
    }, [])
    useEffect(() => {


        window.addEventListener("keydown", handlekeydown)
        return () => window.removeEventListener("keydown", handlekeydown)
        const interval = setInterval(() => {
            console.log("aa");

            if (!tiles.flat().some((v) => v == false)) {
                clearInterval(interval)
            }
            setTiles((prev) => {
                const copy = structuredClone(prev);
                const rad = deg * (Math.PI / 180);
                const nR = {
                    x: pR.x + Math.round(Math.sin(rad - Math.PI / 2)),
                    y: pR.y + Math.round(Math.sin(rad))
                };
                const nL = {
                    x: pL.x + Math.round(Math.cos(rad)),
                    y: pL.y + Math.round(Math.cos(rad + Math.PI / 2))
                };
                console.log(nR, nL);

                // if (nR.x >= 0 && nR.x < 30 && nR.y >= 0 && nR.y < 30 && !copy[nR.y][nR.x]) {
                pR = nR;
                pL = nL;
                copy[nL.y][nL.x] = true;
                // copy[nR.y][nR.x] = true;
                // }
                // else {
                //     deg += 90
                // }
                return copy;
            });
        }, 1000);
        return () => clearInterval(interval)
    }, [handlekeydown])
    return (
        <>
            <div className={cn(`w-dvw h-dvh fixed top-0 left-0  z-[99999] grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]`)}>
                {
                    tiles.map((row, y) => {
                        return row.map((tile, x) => (
                            <div key={y + ":" + x} className={cn({ "bg-yellow-200": tile })}></div>
                        ))
                    })
                }
            </div>
        </>
    );
}
