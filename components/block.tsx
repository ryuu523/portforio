import Image, { StaticImageData } from "next/image";
import grass1 from "../public/images/mapTile/maptile_sogen_01.png"
import grass2 from "../public/images/mapTile/maptile_sogen_02.png"
import see1 from "../public/images/mapTile/maptile_umi_01.png"
import see2 from "../public/images/mapTile/maptile_umi_02.png"
import snow from "../public/images/mapTile/maptile_setsugen.png"
import sand from "../public/images/mapTile/maptile_sabaku.png"
import lava from "../public/images/mapTile/maptile_yogan.png"

import bridge from "../public/images/bridge_side_brown.png"
import hole from "../public/images/ana_gray.png"

import "../styles/block.css"

type BlockProps = {
    type: number;
};

export default function Block({ type }: BlockProps) {
    const getImageSrc = (): string => {
        switch (type) {
            case 1:
                return see1.src;
            case 2:
                return grass1.src;
            case 3:
                return snow.src;
            case 4:
                return sand.src;
            case 5:
                return lava.src;
            case 6:
                return bridge.src
            default:
                return grass2.src;
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
