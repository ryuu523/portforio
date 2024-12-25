import grass1 from "../public/images/mapTile/maptile_sogen_01.png"
import grass2 from "../public/images/mapTile/maptile_sogen_02.png"
import see1 from "../public/images/mapTile/maptile_umi_01.png"
import see2 from "../public/images/mapTile/maptile_umi_02.png"
import snow from "../public/images/mapTile/maptile_setsugen.png"
import sand from "../public/images/mapTile/maptile_sabaku.png"
import lava from "../public/images/mapTile/maptile_yogan.png"
import wood from "../public/images/mapTile/maptile_wood_02.png"

import playerImage from "../public/images/hero_01_clip.png"

// import bridge from "../public/images/bridge_side_brown.png"
// import hole from "../public/images/ana_gray.png"
import castle from "../public/images/shiro_02_brown_roof_blue.png"
import home from "../public/images/ie_front_01_red.png"
import kyokai from "../public/images/kyokai_01_snow.png"
import toride from "../public/images/toride_gray_flag_blue.png"

import door from "../public/images/door_shitsunai_03.png"
import kanban from "../public/images/tatefuda_beige.png"

import "../styles/block.css"
import { cn } from "@/utils"

type BlockProps = {
    type: number;
    player: boolean
    componentType?: number
    switchType: (componentType: number) => void
};

export default function Block({ type, player, componentType, switchType }: BlockProps) {
    const getComponentImageSrc = (): string => {
        switch (componentType) {
            case 1:
                return castle.src
            case 2:
                return toride.src
            case 3:
                return home.src
            case 4:
                return kyokai.src
            case 5:
                return door.src
            case 6:
                return kanban.src
            default:
                return castle.src
        }
    }
    const getTileImageSrc = (): string => {
        switch (type) {
            case 0:
                return grass1.src;
            case 1:
                return grass2.src;
            case 2:
                return see1.src;
            case 3:
                return see2.src;
            case 4:
                return snow.src;
            case 5:
                return sand.src;
            case 6:
                return lava.src;
            case 7:
                return wood.src
            default:
                return grass1.src
        }
    }

    return (
        <>
            <div className={cn(`relative flex justify-center align-middle ${!!componentType ? "fukidasi fukidasi"+componentType : ""}`)}>
                <img 
                    src={getTileImageSrc()}
                    alt="Block Image"
                />
                {!!componentType && <img className={cn(` cursor-pointer absolute top-0 object-cover h-[calc(min(100dvw,100dvh)/var(--size))]`)} src={getComponentImageSrc()} onClick={() => switchType(componentType)} />}
                {player && <img className={cn(` absolute top-0 object-cover w-[calc(min(100dvw,100dvh)/var(--size))]`)} src={playerImage.src} alt="Player Image" />}
            </div>
        </>
    );
}
