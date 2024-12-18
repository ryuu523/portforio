
import Block from "./block";
import { cn } from "@/utils";
import "../styles/field.css"
import { useEffect } from "react";

type Props = {
    field: Array<Array<number>>
    className?: string
    playerPos: { x: number, y: number }
};
export default function Field({ className, field, playerPos }: Props) {
    useEffect(() => {
        document.documentElement.style.setProperty('--size', `${field.length}`);
    }, [])
    return (

        <div className={cn("field_grid grid-cols-[repeat(var(--size),1fr)]  grid-rows-[repeat(var(--size),1fr)] scale-[var(--scale)]", className)}>
            {
                field.map((row, y) => {
                    return row.map((type, x) => {
                        return <Block key={y + ":" + x} type={type} player={playerPos.x == x && playerPos.y == y ? true : false}></Block>
                    })
                })
            }
        </div>

    );
}
