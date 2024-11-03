"use client";
import { DeleteIcon, EditIcon } from "@/assets/icons";
import { Button } from "@/ui/atoms";
import "./cardStyles.scss";
import { useIdState, useOpenModal } from "@/app/core/application/global-state";

interface ICardProps{
    children: React.ReactNode,
    id:number | string,
    section:string
}

export default function Card({
    children,
    id,
    section
}: ICardProps):React.ReactNode{
    const {setOpenModal} = useOpenModal((state)=>state);
    const {setId} = useIdState((state)=>state);
    const handleSaveId = (id:number | string, type:string):void =>{
        switch(type){
            case "EDIT_VACANT":
                setOpenModal({
                    state:true,
                    type:"EDIT_VACANT",
                });
                setId(id);
                break;
            case "EDIT_COMPANY":
                setOpenModal({
                    state:true,
                    type:"EDIT_COMPANY",
                });
                setId(id);
                break;
            case "DELETE_VACANT":
                setOpenModal({
                    state:true,
                    type:"DELETE_VACANT",
                })
                setId(id);
                break;
            case "DELETE_COMPANY":
                setOpenModal({
                    state:true,
                    type:"DELETE_COMPANY",
                })
            default:
                "error";
        }
    }
    return(
        <div className="card">
            <div className="card-body">
                {children}
            </div>
            <div className="card-footer">
                <Button 
                    className="buttonIcon"
                    onClick={()=>handleSaveId(id, section === "vacant" ? "EDIT_VACANT" : "EDIT_COMPANY")}
                    icon={<EditIcon className="icon-left" />} />
                <Button
                    className="buttonIcon"
                    onClick={()=>handleSaveId(id, section === "vacant" ? "DELETE_VACANT" : "DELETE_COMPANY")}
                    icon={<DeleteIcon className="icon-right" />} />
            </div>
        </div>
    )
}