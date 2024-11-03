import { create } from "zustand";

interface IIdState {
    id: number | string;
    setId: (id: number | string) => void;
}

export const useIdState = create<IIdState>((set)=>({
    id: 0,
    setId: (id: number | string) => set({id}),
}))