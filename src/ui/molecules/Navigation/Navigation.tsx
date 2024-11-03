"use client";
import { Button } from "@/ui/atoms";
import { SuitcaseIcon, BuildingIcon } from "@/assets/icons";
import "./navigationStyles.scss";
import { useLoadingState, useSectionState } from "@/app/core/application/global-state";

export default function Navigation():React.ReactNode{
    const {section,setSection} = useSectionState((state)=>state);
    const {setIsLoading} = useLoadingState((state)=>state);
    const handleChangeSection = (sectionChange:string):void =>{
        setSection(sectionChange);
        setIsLoading(true);
        setTimeout(()=>setIsLoading(false), 500);
    }
    return(
        <nav className="navigation">
            <Button
                className={section === "vacants" ? "buttonNavigation active" : "buttonNavigation"}
                icon={<SuitcaseIcon />}
                text="Vacants"
                onClick={()=>handleChangeSection("vacants")}
            />
            <Button
                className={section === "companies" ? "buttonNavigation active" : "buttonNavigation"}
                icon={<BuildingIcon />}
                text="Companies"
                onClick={()=>handleChangeSection("companies")}
            />
        </nav>
    )
}