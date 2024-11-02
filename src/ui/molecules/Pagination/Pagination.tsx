"use client";
import { usePaginationState } from "@/app/core/application/global-state"
import { ArrowBackIcon, ArrowRightIcon } from "@/assets/icons"

export default function Pagination():React.ReactNode{
    const {pagination} = usePaginationState((state)=>state);

    const handleChangePagination = (newPage: number):void =>{
        console.log(newPage);
    }
    return(
        <div className="pagination">
            <ArrowBackIcon
            onClick={()=>handleChangePagination(1)}
            />
            <span>{pagination.page}</span>
            <span>of</span>
            <span>{pagination.size}</span>
            <ArrowRightIcon
            onClick={()=>handleChangePagination(2)}
            />
        </div>
    )
}