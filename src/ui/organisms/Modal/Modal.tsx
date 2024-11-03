import { Button } from "@/ui/atoms";
import "./modalStyles.scss";

interface IModalProps{
    title?:string
    children: React.ReactNode
}

export default function Modal({
    children,
    title = "Add Vacant"
}:IModalProps):React.ReactNode{
    return(
        <div className="content-modal">
            <div className="modal">
                <div className="modal-header">
                    <h4>{title}</h4>
                    <span>X</span>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>       
    )
}