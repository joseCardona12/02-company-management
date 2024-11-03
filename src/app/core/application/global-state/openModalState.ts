import { create } from "zustand";

interface IOpenModalState{
    openModal: boolean;
    setOpenModal: (openModal: boolean) => void;
}

export const useOpenModal = create<IOpenModalState>((set)=>({
    openModal: false,
    setOpenModal: (openModal: boolean) => set({openModal})
}))