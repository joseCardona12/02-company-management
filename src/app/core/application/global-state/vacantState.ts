import { create } from "zustand";
import { IVacant } from "../dto/vacant/vacantResponse";

interface IVacantState{
    vacants: IVacant[],
    setVacants: (vacants: IVacant[]) => void
}

export const useVacantsState = create<IVacantState>((set)=>({
    vacants: [
        {
            id: 1,
            title: "",
            description: "",
            status: "",
            company: {
                id: "",
                name: "",
                location: "",
                contact: ""
            }
        }
    ],
    setVacants: (vacants: IVacant[]) => set({vacants})
}))