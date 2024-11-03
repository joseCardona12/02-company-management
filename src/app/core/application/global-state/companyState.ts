import { create } from "zustand";
import { ICompany } from "../dto/company/companyResponse";

interface ICompanyState {
    companies: ICompany[];
    setCompanies: (companies: ICompany[]) => void;
}

export const useCompanyState = create<ICompanyState>((set)=>({
    companies: [
        {
            id: "",
            name: "",
            location: "",
            contact: "",
            vacants: []
        }
    ],
    setCompanies: (companies: ICompany[]) => set({companies}),
}))