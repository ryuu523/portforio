"use client";
import Field from "@/components/field";
import Form from "@/components/form";
import { useField } from "@/hooks/useFIeld";
export default function Contact() {
   const {field,playerPos,mapComponentPlaces,formActives,nextFormStep}=useField()
      
       
       return (
        
           <div className="outer-div scale-[var(--scale)]">
               <Field className="inner-div" field={field} playerPos={playerPos} mapCom={mapComponentPlaces}/>
               <Form actives={formActives} nextStep={nextFormStep}/>
               
           </div>
       );
}