import { create } from "zustand";
import { IVacant } from "../dto/vacant/vacantResponse";

interface IVacantSelectState{
    vacantSelect: IVacant[]
    setVacantSelect: (vacantSelect: IVacant[]) => void
}

export const useVacantSelectState = create<IVacantSelectState>((set)=>({
    vacantSelect: [],
    setVacantSelect: (vacantSelect: IVacant[]) => set({vacantSelect}),
}))