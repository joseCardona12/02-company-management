"use client";
import { DeleteIcon, EditIcon } from "@/assets/icons";
import { Button } from "@/ui/atoms";
import "./cardStyles.scss";

export default function Card({children}: {children: React.ReactNode}):React.ReactNode{
    return(
        <div className="card">
            <div className="card-body">
                {children}
            </div>
            <div className="card-footer">
                <Button 
                    className="buttonIcon"
                    onClick={()=>console.log("ok")}
                    icon={<EditIcon className="icon-left" />} />
                <Button
                    className="buttonIcon"
                    onClick={()=>console.log("ok")}
                    icon={<DeleteIcon className="icon-right" />} />
            </div>
        </div>
    )
}