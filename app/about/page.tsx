"use client";
import Field from "@/components/field";
import { useField } from "@/hooks/useFIeld";

export default function About() {
    const {field,playerPos,mapComponentPlaces}=useField()
       
        
        return (
            <div className="outer-div scale-[var(--scale)]">
                <Field className="inner-div" field={field} playerPos={playerPos} mapCom={mapComponentPlaces}/>
            </div>
        );
}