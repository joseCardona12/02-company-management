"use client";
import { useLoadingState, usePaginationState } from "@/app/core/application/global-state"
import { ArrowBackIcon, ArrowRightIcon } from "@/assets/icons";
import "./paginationStyles.scss";
import { Button } from "@/ui/atoms";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Pagination():React.ReactNode{
    const router = useRouter();
    const searchParams = useSearchParams();
    const {pagination, setPagination} = usePaginationState((state)=>state);
    const {isLoading,setIsLoading} = useLoadingState((state)=>state);

    const handleChangePagination = (newPage: number):void =>{
        setIsLoading(true);
        setPagination({page: newPage, totalPage: pagination.totalPage});
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());
        router.push(`/dashboard?${params.toString()}`);
        setTimeout(()=>setIsLoading(false), 2000);
    }
    const currentPage:number = pagination.page;
    return(
        <div className="pagination flex-direction-row">
            <Button
                className={currentPage === pagination.totalPage ? "buttonIcon disabled" : "buttonIcon"}
                icon={<ArrowBackIcon className="icon-left"/>}
                disabled={currentPage === 1}
                onClick={() => handleChangePagination(currentPage - 1)}
            />
            <span>Page</span>
            <span>{pagination.page}</span>
            <span>of</span>
            <span>{pagination.totalPage}</span>

            <Button
                className={currentPage === pagination.totalPage ? "buttonIcon disabled" : "buttonIcon"}
                icon={<ArrowRightIcon className="icon-right"/>}
                disabled={currentPage === pagination.totalPage}
                onClick={() => handleChangePagination(currentPage + 1)}
            />
        </div>
    )
}