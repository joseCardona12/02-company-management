import { create } from "zustand";

interface IPaginationState{
    pagination: IPaginationProps,
    setPagination: (pagination: IPaginationProps) => void
}

interface IPaginationProps{
    page:number,
    size:number
}

export const usePaginationState = create<IPaginationState>((set)=>({
    pagination: {
        page: 1,
        size: 1
    },
    setPagination: ({page,size}: IPaginationProps) => set({pagination: {page,size}})
}))