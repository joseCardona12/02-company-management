import { create } from "zustand";

interface IModalFooterMessageState {
    modal: IModalFooter;
    setModal: (modal: IModalFooter) => void;
}

interface IModalFooter{
    state: boolean;
    message: string;
    icon: React.ReactNode;
}

export const useModalFooterMessageState = create<IModalFooterMessageState>((set) => ({
    modal: {
        state: false,
        message: "",
        icon: "<></>",
    },
    setModal: (modal) => set({modal}),
}))