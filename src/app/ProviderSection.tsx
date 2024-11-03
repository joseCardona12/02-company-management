"use client";

import { Vacant, Company } from "@/ui/organisms";
import { IVacantResponse } from "./core/application/dto/vacant/vacantResponse";
import { useCompanyState, useSectionState, useVacantSelectState, useVacantsState } from "./core/application/global-state";
import { ICompanyResponse } from "./core/application/dto/company";
import { useEffect } from "react";
import { ICompany } from "./core/application/dto/company/companyResponse";

interface IProviderSectionProps{
    vacancies: IVacantResponse,
    companies: ICompanyResponse,
    companiesAll: ICompany[],
}
export default function ProviderSection({vacancies, companies, companiesAll}: IProviderSectionProps):React.ReactNode{
    const {section} = useSectionState((state)=>state);
    const {vacants,setVacants} = useVacantsState((state)=>state);
    const {vacantSelect} = useVacantSelectState((state)=>state);
    const {setCompanies} = useCompanyState((state)=>state); //State for all companies in modal select

    useEffect(()=>{
        setVacants(vacancies.content);
        setCompanies(companiesAll);
    },[vacancies, companiesAll])
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