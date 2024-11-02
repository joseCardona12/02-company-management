"use client";
import { Input } from "@/ui/atoms";
import { SearchIcon } from "@/assets/icons";
import "./searchInputStyles.scss";
import React, { useEffect, useState } from "react";
import { useVacantSelectState, useVacantsState } from "@/app/core/application/global-state";
import { searchElemenFilterVacant, searchElementById } from "@/app/core/application/utils";
import { IVacant } from "@/app/core/application/dto/vacant/vacantResponse";

export default function SearchInput():React.ReactNode{

    const [search, setSearch] = useState<string>("");
    const {vacants} = useVacantsState((state)=>state); // Get vacant global state
    const [vacantsFilter, setVacantsFilter] = useState<IVacant[] | undefined>([]);
    const {setVacantSelect} = useVacantSelectState((state)=>state); // State global for vacantSelect
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void =>{
        setSearch(e.target.value)
    }
    const handleClick = (id:number):void=>{
        const vacantFound:IVacant | undefined = searchElementById(vacants, id);
        if(!vacantFound) return;
        setVacantSelect([vacantFound]);
    }
    const handleClickDeleteSearch = ():void =>{
        setVacantSelect([]);
        setSearch("");
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
                            <li className="found-item delete" onClick={handleClickDeleteSearch}>
                                Delete the filter...
                            </li>
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