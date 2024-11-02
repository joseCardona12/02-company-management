import { create } from "zustand";

interface ISectionState{
    section: string,
    setSection: (value:string)=>void
}

export const useSectionState = create<ISectionState>((set)=>({
    section: "vacants",
    setSection: (value:string) => set({section: value})
}))