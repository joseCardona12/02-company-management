"use client";
import { usePaginationState } from "@/app/core/application/global-state"
import { ArrowBackIcon, ArrowRightIcon } from "@/assets/icons";
import "./paginationStyles.scss";
import { Button } from "@/ui/atoms";

export default function Pagination():React.ReactNode{
    const {pagination} = usePaginationState((state)=>state);

    const handleChangePagination = (newPage: number):void =>{
        console.log(newPage);
    }
    return(
        <div className="pagination flex-direction-row">
            <Button
                className="buttonIcon"
                icon={<ArrowBackIcon className="icon-left"/>}
                onClick={() => handleChangePagination(pagination.page - 1)}
            />
            <span>Page</span>
            <span>{pagination.page}</span>
            <span>of</span>
            <span>{pagination.size}</span>

            <Button
                className="buttonIcon"
                icon={<ArrowRightIcon className="icon-right"/>}
                onClick={() => handleChangePagination(pagination.page - 1)}
            />
        </div>
    )
}