import Image, { StaticImageData } from "next/image";
import back1 from "../public/images/maptile_sogen_01.png"
import back2 from "../public/images/maptile_sogen_02.png"
import "../styles/block.css"
type BlockProps = {
    type: number;
};
export default function Block({ type }: BlockProps) {
    const getImageSrc = (): string => {
        switch (type) {
            case 1:
                return back1.src;
            case 2:
                return back2.src;

            default:
                return back1.src;
        }
    }
    return (
        <>
            <div >
                <img
                    src={getImageSrc()}
                    alt="Block Image"
                />
            </div>
        </>
    );
}
