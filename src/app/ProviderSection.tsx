"use client";

import { Vacant, Company } from "@/ui/organisms";
import { IVacantResponse } from "./core/application/dto/vacant/vacantResponse";
import { useSectionState, useVacantSelectState, useVacantsState } from "./core/application/global-state";
import { ICompanyResponse } from "./core/application/dto/company";
import { useEffect } from "react";

interface IProviderSectionProps{
    vacancies: IVacantResponse,
    companies: ICompanyResponse
}
export default function ProviderSection({vacancies, companies}: IProviderSectionProps):React.ReactNode{
    const {section} = useSectionState((state)=>state);
    const {setVacants} = useVacantsState((state)=>state);
    const {vacantSelect} = useVacantSelectState((state)=>state);

    useEffect(()=>{
        setVacants(vacancies.content);
    },[vacancies])
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
                vacancies={
                    vacantSelect.length > 0
                    ?
                    vacantSelect
                    :
                    vacancies.content
                } 
            />
        }   
        </>
    )
}