import Image, { StaticImageData } from "next/image";
import back from "../images/maptile_sogen_01.png"
type BlockProps = {
    type: number;
};
export default function Block({ type }: BlockProps) {
    const getImageSrc = (): StaticImageData => {
        switch (type) {
            case 1:
                return back;

            default:
                return back;
        }
    }
    return (
        <>
            <div className="block">
                <Image
                    className="back"
                    src={getImageSrc()} // StaticImageData型をそのまま渡す
                    alt="Block Image"
                    layout="responsive" // 必要に応じてレイアウト指定
                />
            </div>
        </>
    );
}
