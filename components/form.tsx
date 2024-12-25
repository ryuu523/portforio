"use client"

import { cn } from "@/utils";
type Props = {
    actives: boolean[]
    nextStep:()=>void
}
export default function Form({ actives ,nextStep}: Props) {

    return (
        <form className={cn(`z-[2] `)} action="" >
            {actives[0] && <div className={cn(` text-white flex justify-center bg-black  w-[calc(min(100dvw,100dvh)/var(--size)*13)] h-[calc(min(100dvw,100dvh)/var(--size))] p-6`)}>
                <label className={cn(`flex justify-end items-center h-full w-1/5 text-[1.5rem] `)} htmlFor="name">名前：</label>
                <input className={cn(`ml-[2rem] text-black text-[1.5rem] w-3/6`)} type="text" id="name" />
                <div className={cn(`ml-[1rem] w-1/6 h-100 bg-yellow-400`)} onClick={()=>nextStep()}></div>
            </div>}
            {actives[1] && <div className={cn(`text-white flex justify-center bg-black  w-[calc(min(100dvw,100dvh)/var(--size)*13)] h-[calc(min(100dvw,100dvh)/var(--size))] p-6`)}>
            
                <label className={cn(`flex justify-end items-center h-full w-1/5  text-[1.5rem] `)} htmlFor="name">メールアドレス：</label>
                <input className={cn(`ml-[2rem] text-black text-[1.5rem] w-3/6`)} type="text" id="name" />
                {/* <div className={cn(`ml-[1rem] w-1/4 h-100 bg-yellow-400`)} onClick={()=>nextStep()}></div> */}
            </div>}
            {actives[2] && <div className={cn(`text-white flex justify-center bg-black  w-[calc(min(100dvw,100dvh)/var(--size)*13)] h-[calc(min(100dvw,100dvh)/var(--size)*4)] p-6`)}>
                <label className={cn(`flex justify-end items-center h-full w-1/5 text-[1.5rem] `)} htmlFor="name">内容：</label>
                <textarea className={cn(`ml-[2rem] text-black text-[1.5rem] w-3/6`)} rows={30} cols={50} id="name" />
                {/* <div className={cn(`w-1/4 h-100 bg-yellow-400`)} onClick={()=>nextStep()}></div> */}
            </div>}
        </form>

    );
}
