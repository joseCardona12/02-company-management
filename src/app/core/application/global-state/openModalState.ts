import { create } from "zustand";

interface IOpenModalState{
    openModal: IOpenModal
    setOpenModal: (openModal: IOpenModal) => void;
}

interface IOpenModal{
    state:boolean,
    type:string
}

export const useOpenModal = create<IOpenModalState>((set)=>({
    openModal: {
        state:false,
        type:""
    },
    setOpenModal: (openModal: IOpenModal) => set({openModal})
}))