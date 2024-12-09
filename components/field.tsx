
import Block from "./block";
import { cn } from "@/utils";
import "../styles/field.css"

type Props = {
    field: Array<Array<number>>
    className?: string
};
export default function Field({ className, field }: Props) {
    return (

        <div className={cn("grid grid-cols-[repeat(48,calc(var(--var)/var(--cut)))]  grid-rows-[repeat(27,calc(var(--var)/var(--cut)))]", className)}>
            {
                field.map((row, y) => {
                    return row.map((type, x) => {
                        return <Block key={y + ":" + x} type={type}></Block>
                    })
                })
            }
        </div>

    );
}
