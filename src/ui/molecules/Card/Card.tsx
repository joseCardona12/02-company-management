"use client";
import { DeleteIcon, EditIcon } from "@/assets/icons";
import { Button } from "@/ui/atoms";
import "./cardStyles.scss";
import { useIdState, useOpenModal } from "@/app/core/application/global-state";

interface ICardProps{
    children: React.ReactNode,
    id:number | string
}

export default function Card({
    children,
    id
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
            case "DELETE_VACANT":
                setOpenModal({
                    state:true,
                    type:"DELETE_VACANT",
                })
                setId(id);
                break;
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
                    onClick={()=>handleSaveId(id, "EDIT_VACANT")}
                    icon={<EditIcon className="icon-left" />} />
                <Button
                    className="buttonIcon"
                    onClick={()=>handleSaveId(id, "DELETE_VACANT")}
                    icon={<DeleteIcon className="icon-right" />} />
            </div>
        </div>
    )
}