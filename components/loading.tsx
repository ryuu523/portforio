"use client";

import { cn } from "@/utils";
import { useEffect, useState } from "react";

const SIZE: number = 15;
type Props = {
    direction: string
};
export default function Loading({ direction }: Props) {
    const [tiles, setTiles] = useState<boolean[][]>(Array.from({ length: SIZE }, () => Array.from({ length: SIZE }, () => direction === "out" ? false : true)));

    const animationTiles = () => {
        let deg = 0
        let pR: { x: number, y: number }, pL: { x: number, y: number }
        let isIncompleteType: boolean
        switch (direction) {
            case "in":
                pR = { x: Math.floor(SIZE / 2) + 1, y: Math.floor(SIZE / 2) }
                pL = { x: Math.floor(SIZE / 2) - 1, y: Math.floor(SIZE / 2) };
                isIncompleteType = true
                break;
            case "out":
                pR = { x: SIZE, y: 0 }
                pL = { x: -1, y: SIZE - 1 };
                isIncompleteType = false
                break
        }
        const interval = setInterval(() => {
            setTiles((prev) => {
                if (!prev.flat(2).some((v) => v == isIncompleteType)) {
                    clearInterval(interval)
                    return prev
                }

                const copy = structuredClone(prev);
                const rad = deg * (Math.PI / 180);

                const nR = {
                    x: pR.x + Math.round(Math.sin(rad - Math.PI / 2)),
                    y: pR.y + Math.round(Math.sin(rad)),
                };
                const nL = {
                    x: pL.x + Math.round(Math.cos(rad)),
                    y: pL.y + Math.round(Math.cos(rad + Math.PI / 2)),
                };


                if (nR.x >= 0 && nR.x < SIZE && nR.y >= 0 && nR.y < SIZE && copy[nR.y][nR.x] == isIncompleteType) {
                    pR = nR
                    pL = nL
                    copy[nR.y][nR.x] = !isIncompleteType;
                    copy[nL.y][nL.x] = !isIncompleteType;
                    if (direction === "in") {
                        const rad = (deg + 90) * (Math.PI / 180);
                        if (copy[nR.y + Math.round(Math.sin(rad))][nR.x + Math.round(Math.sin(rad - Math.PI / 2))] == isIncompleteType) {
                            deg += 90
                        }
                    }
                } else {
                    deg += 90
                }

                return copy;
            });
        }, 7)
    };
    useEffect(() => {
        animationTiles()
    }, []);
    return (
        <div className={cn(`w-dvw h-dvh fixed top-0 left-0 z-[99999] grid grid-cols-[repeat(15,1fr)] grid-rows-[repeat(15,1fr)]`)}>
            {tiles.map((row, y) => {
                return row.map((tile, x) => (
                    <div key={`${y}:${x}`} className={cn({ "bg-yellow-200": tile })}></div>
                ));
            })}
        </div>
    );
}