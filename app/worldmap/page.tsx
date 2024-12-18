"use client";

import Field from "@/components/field";
import { useField } from "@/hooks/useFIeld";

export default function Worldmap() {
    // const field: Array<Array<number>> = Array.from({ length: 27 }, (_, i) => Array.from({ length: 48 }, (_, j) => (i + j) % 2 + 1));　テストデータ
    const {field,playerPos}=useField()
   
    
    return (
        <div className="outer-div scale-[var(--scale)]">
            <Field className="inner-div" field={field} playerPos={playerPos}/>
        </div>
    );
}
