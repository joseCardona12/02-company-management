"use client";
import { usePaginationState } from "@/app/core/application/global-state"
import { ArrowBackIcon, ArrowRightIcon } from "@/assets/icons";
import "./paginationStyles.scss";
import { Button } from "@/ui/atoms";

export default function Pagination():React.ReactNode{
    const {pagination, setPagination} = usePaginationState((state)=>state);

    const handleChangePagination = (newPage: number):void =>{
        setPagination({page: newPage, totalPage: pagination.totalPage});
    }
    const currentPage:number = pagination.page
    return(
        <div className="pagination flex-direction-row">
            <Button
                className={currentPage === pagination.totalPage ? "buttonIcon disabled" : "buttonIcon"}
                icon={<ArrowBackIcon className="icon-left"/>}
                disabled={currentPage === pagination.totalPage}
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