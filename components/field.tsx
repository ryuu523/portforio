
import Block from "./block";
import { cn } from "@/utils";
import "../styles/field.css"
import { useEffect } from "react";
import { useLoading } from "@/context/LoadingContext";

type Props = {
    field: Array<Array<number>>
    className?: string
    playerPos: { x: number, y: number }
    mapCom: { x: number, y: number, id: number }[]
};
export default function Field({ className, field, playerPos, mapCom }: Props) {
    useEffect(() => {
        document.documentElement.style.setProperty('--size', `${field.length}`);
    }, [])
    let i = 0
    const { jumpUrl } = useLoading()
    const switchType = (mapComType: number) => {
        switch (mapComType) {
            case 5:
                jumpUrl("/worldmap")
                break;
            case 4:
                jumpUrl("/")
                break;
            case 3:
                jumpUrl("/about")
                break;
            case 2:
                jumpUrl("/skills")
                break;
            case 1:
                jumpUrl("/contact")
                break;
        }
    }
    useEffect(() => {
  
            const matchedCom = mapCom.find(
                (com) => com.x === playerPos.x && com.y === playerPos.y
            );
            if (matchedCom) {
                switchType(matchedCom.id);
            }
        
    }, [playerPos, mapCom]);
    return (

        <div className={cn("field_grid grid-cols-[repeat(var(--size),1fr)]  grid-rows-[repeat(var(--size),1fr)] scale-[var(--scale)]", className)}>
            {
                field.map((row, y) => {
                    return row.map((type, x) => {
                        if (i < mapCom.length && mapCom[i].x == x && mapCom[i].y == y) {
                            i++
                            
                            return <Block key={y + ":" + x} type={type} player={playerPos.x == x && playerPos.y == y ? true : false} componentType={mapCom[i - 1].id} switchType={switchType}></Block>
                        }
                        else {
                            return <Block key={y + ":" + x} type={type} player={playerPos.x == x && playerPos.y == y ? true : false} switchType={switchType}></Block>

                        }
                    })
                })
            }
        </div>

    );
}
