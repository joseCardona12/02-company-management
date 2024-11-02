"use client";

import { Vacant } from "@/ui/organisms";
import { IVacantResponse } from "./core/application/dto/vacant/vacantResponse";
import { useSectionState } from "./core/application/global-state";

interface IProviderSectionProps{
    vacancies: IVacantResponse,
    companies: {}
}
export default function ProviderSection({vacancies, companies}: IProviderSectionProps):React.ReactNode{
    const {section} = useSectionState((state)=>state)
    return(
        <>
        {section === "companies" 
            ?
            <div>Companies</div>
            :
            <Vacant 
                title="Vacants" 
                vacancies={vacancies.content} 
            />
        }   
        </>
    )
}