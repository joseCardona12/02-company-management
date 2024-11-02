"use client";
import { useEffect } from "react";
import { usePaginationState } from "./core/application/global-state";

interface IProviderPaginationProps{
    children: React.ReactNode,
    pagination: IPaginationProps
}
interface IPaginationProps{
    page:number,
    size: number
}

export default function ProviderPagination({children, pagination}: IProviderPaginationProps):React.ReactNode{
    const {pagination: paginationState,setPagination} = usePaginationState((state)=>state);

    useEffect(()=>{
        setPagination(pagination);
    }, [pagination, setPagination])
    return(
        <>  
        {children}
        </>
    )
}