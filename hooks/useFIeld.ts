import { useLoading } from "@/context/LoadingContext";
import { useMenu } from "@/context/MenuContext";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

// const [field, setField] = useState<Array<Array<number>>>([
//     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//     [2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3],
//     [2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3],
//     [2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3],
//     [2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
//     [2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
//     [2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
//     [2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
//     [2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
//     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
//     [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3],
//     [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3],
//     [3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3],
//     [3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3],
//     [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3],
//     [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3],
//     [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5],
//     [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5],
//     [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5],
//     [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
//     [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6],
//     [3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6],
//     [3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
//     [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6],
//     [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
//     [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]])

const SIZE = 11
export const useField = () => {

    const [playerPos, setPlayerPos] = useState({ x: 3, y: 2 })
    const [field, setField] = useState<Array<Array<number>>>(Array.from({ length: SIZE }, (_, i) => Array.from({ length: SIZE }, (_, j) => (i + j) % 2)))
    const [mapComponentPlaces, setMapComponentPlaces] = useState<{ x: number; y: number, id: number }[]>([{ x: 2, y: 2, id: 4 }, { x: 8, y: 2, id: 3 }, { x: 2, y: 8, id: 2 }, { x: 8, y: 8, id: 1 }])
    const { isActive } = useMenu()
    const pathname = usePathname()
    const { oldPathname, isLoading } = useLoading();
    const [formActives, setFormActives] = useState<boolean[]>([false, false, false])
    const [formStep, setFormStep] = useState<number>(0)
    useEffect(() => {
        switch (pathname) {
            case "/worldmap":
                setField(Array.from({ length: SIZE }, (_, i) => Array.from({ length: SIZE }, (_, j) => (i + j) % 2)))
                setMapComponentPlaces([{ x: 2, y: 2, id: 4 }, { x: 8, y: 2, id: 3 }, { x: 2, y: 8, id: 2 }, { x: 8, y: 8, id: 1 }])
                switch (oldPathname) {
                    case "/":
                        setPlayerPos({ x: 2, y: 3 })
                        break;
                    case "/about":
                        setPlayerPos({ x: 8, y: 3 })
                        break;
                    case "/skills":
                        setPlayerPos({ x: 2, y: 9 })
                        break;
                    case "/contact":
                        setPlayerPos({ x: 8, y: 9 })
                        break;
                }
                break;

            case "/about":
                setField([
                    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 8, 8, 8, 8, 7, 8, 8, 8, 8, 8],])
                setMapComponentPlaces([{ x: 5, y: 10, id: 5 }])
                setPlayerPos({ x: 5, y: 8 })
                break;

            case "/skills":
                setField([
                    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 8, 8, 8, 8, 7, 8, 8, 8, 8, 8],])
                setMapComponentPlaces([{ x: 5, y: 10, id: 5 }])
                setPlayerPos({ x: 5, y: 8 })
                break;

            case "/contact":
                setField([
                    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8],
                    [8, 8, 8, 8, 8, 7, 8, 8, 8, 8, 8],])
                setMapComponentPlaces([{ x: 5, y: 2, id: 6 }, { x: 5, y: 4, id: 6 }, { x: 5, y: 6, id: 6 }, { x: 5, y: 10, id: 5 }])
                setPlayerPos({ x: 5, y: 8 })

                startContactStory([{ x: 5, y: 2, id: 6 }, { x: 5, y: 4, id: 6 }, { x: 5, y: 6, id: 6 }, { x: 5, y: 10, id: 5 }])

                break;

            default:
                break;
        }

    }, [pathname])
    const nextFormStep = () => {

        setFormStep((prev) => prev + 1)
    }
    const startContactStory = useCallback((mCPs: { x: number; y: number, id: number }[]) => {
        //斜め移動不可
        const goPlaces = [{ x: 2, y: 8 }, { x: 2, y: 1 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 4 }, { x: 5, y: 6 }, { x: 5, y: 10 }]
        let i = 0
        let oldStep = -1

        const interval = setInterval(() => {
            
            setPlayerPos((prev) => {
                if (oldStep == formStep) return prev
                if (i > goPlaces.length - 1) {
                    clearInterval(interval)
                    return prev
                }
                let dx = prev.x - goPlaces[i].x
                let dy = prev.y - goPlaces[i].y
                if (dx == 0 && dy == 0) {
                    i++
                    if (!(i > goPlaces.length - 1)) {
                        dx = prev.x - goPlaces[i].x
                        dy = prev.y - goPlaces[i].y
                    }
                }
                if (dx < 0) moveRight()
                if (dx > 0) moveLeft()
                if (dy < 0) moveDown()
                if (dy > 0) moveUp()
                for (const mCP of mCPs) {
                    if (mCP.x != prev.x - dx || mCP.y != prev.y - dy) continue
                    if (mCP.id == 6) {

                        setFormActives((prev) => {
                            const copy = [...prev]
                            copy[formStep] = true
                            return copy
                        })
                        
                        oldStep = formStep
                    }
                }
                return prev
            })
        }, 100)
        return () => clearInterval(interval)
    }, [field, isLoading, formStep])
    const handleKeydown = useCallback((e: KeyboardEvent) => {
        if (isActive) return
        if (isLoading) return
        if (pathname != "/worldmap") return
        switch (e.key) {
            case "ArrowUp":
            case "w":
                moveUp()
                break;
            case "ArrowDown":
            case "s":
                moveDown()
                break;
            case "ArrowLeft":
            case "a":
                moveLeft()
                break;
            case "ArrowRight":
            case "d":
                moveRight()
                break;
        }
    }, [isActive, isLoading])
    const moveUp = () => {
        move(0, -1)

    }
    const moveDown = () => {
        move(0, 1)
    }
    const moveLeft = () => {
        move(-1, 0)
    }
    const moveRight = () => {
        move(1, 0)
    }
    const isWithinField = (x: number, y: number) => {
        if (x >= 0 && y >= 0 &&
            x < field.length && y < field.length) return true
        return false
    }
    const move = (x: number, y: number) => {

        setPlayerPos((prev) => {
            if (!isWithinField(prev.x + x, prev.y + y)) return prev
            if (!isMovable(prev.x + x, prev.y + y)) return prev
            return ({ ...prev, x: prev.x + x, y: prev.y + y })
        })
    }
    const isMovable = useCallback((x: number, y: number) => {
        if (field[y][x] != 8) return true
        return false
    }, [field])
    const handleWheel = (e: WheelEvent) => {
        let scale = Number(document.documentElement.style.getPropertyValue("--scale"))
        if (e.deltaY > 0) {
            scale -= 0.1
        }
        else {
            scale += 0.1
        }
        if (scale >= 0.3 && scale <= 4) {
            document.documentElement.style.setProperty("--scale", `${scale}`)
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", handleKeydown)
        window.addEventListener("wheel", handleWheel)
        return () => {
            window.removeEventListener("keydown", handleKeydown)
            window.removeEventListener("wheel", handleWheel)
        }
    }, [handleKeydown])

    useEffect(() => {
        document.documentElement.style.setProperty('--size', `${field.length}`);
        document.documentElement.style.setProperty('--scale', `${0.8}`);
    }, [])

    return { field, playerPos, mapComponentPlaces, formActives, nextFormStep };
};