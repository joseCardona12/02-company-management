"use client";

import { Vacant, Company } from "@/ui/organisms";
import { IVacantResponse } from "./core/application/dto/vacant/vacantResponse";
import { useSectionState } from "./core/application/global-state";
import { ICompanyResponse } from "./core/application/dto/company";

interface IProviderSectionProps{
    vacancies: IVacantResponse,
    companies: ICompanyResponse
}
export default function ProviderSection({vacancies, companies}: IProviderSectionProps):React.ReactNode{
    const {section} = useSectionState((state)=>state)
    return(
        <>
        {section === "companies" 
            ?
            <Company
                title="Companies"
                companies={companies.content}
            />
            :
            <Vacant 
                title="Vacants" 
                vacancies={vacancies.content} 
            />
        }   
        </>
    )
}