"use client";
import { Input } from "@/ui/atoms";
import { SearchIcon } from "@/assets/icons";
import "./searchInputStyles.scss";
import React, { useEffect, useState } from "react";
import { useVacantsState } from "@/app/core/application/global-state";
import { searchElemenFilterVacant, searchElementById } from "@/app/core/application/utils";
import { IVacant } from "@/app/core/application/dto/vacant/vacantResponse";

export default function SearchInput():React.ReactNode{

    const [search, setSearch] = useState<string>("");
    const {vacants,setVacants} = useVacantsState((state)=>state);
    const [vacantsFilter, setVacantsFilter] = useState<IVacant[] | undefined>([]);
    const [vacantSelect, setVacantSelect] = useState<IVacant[] | undefined>(undefined); // State for get vacant select
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void =>{
        setSearch(e.target.value)
    }
    const handleClick = (id:number):void=>{
        const vacantFound:IVacant | undefined = searchElementById(vacants, id);
        if(!vacantFound) return;
        setVacantSelect([vacantFound]);
        console.log("vacantFound",vacantSelect);
    }

    useEffect(()=>{
        const itemsFilter = searchElemenFilterVacant(vacants, search);
        setVacantsFilter(itemsFilter);
    }, [search])
    return(
        <div className="search">
            <SearchIcon />
            <Input
                placeholder="search..."
                onChange={(e)=>handleChange(e)}
            />
            <ul className="content-found">
                {search
                 &&
                 <>
                    {
                        vacantsFilter?.length > 0
                        ?
                        <>
                            {vacantsFilter?.map((vacant:IVacant,index:number)=>(
                            <li key={index} className="found-item" onClick={()=>handleClick(vacant.id)}>
                                {vacant.title}
                            </li>
                            ))}
                        </>
                        :
                        <li className="found-item">
                            Not found...
                        </li>
                    }
                </>
                }
            </ul>
        </div>
    )
}