"use client";

import { Loading } from "@/ui/atoms";
import { useLoadingState } from "./core/application/global-state";

export default function ProviderLoading({children}: {children: React.ReactNode}):React.ReactNode{
    const {isLoading} = useLoadingState((state)=>state);
    console.log(isLoading);
    return(
        <>
        {isLoading ?
        
        <Loading />
        :
        null
        }
        {children}
        
        </>
    )
}