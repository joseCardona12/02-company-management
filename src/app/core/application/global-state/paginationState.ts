import { create } from "zustand";

interface IPaginationState{
    pagination: IPaginationProps,
    setPagination: (pagination: IPaginationProps) => void
}

interface IPaginationProps{
    page:number,
    totalPage:number
}

export const usePaginationState = create<IPaginationState>((set)=>({
    pagination: {
        page: 1,
        totalPage: 1
    },
    setPagination: ({page,totalPage}: IPaginationProps) => set({pagination: {page,totalPage}})
}))