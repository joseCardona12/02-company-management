import { Button } from "@/ui/atoms";
import "./modalStyles.scss";
import { useOpenModal } from "@/app/core/application/global-state";

interface IModalProps{
    title?:string
    children: React.ReactNode
}

export default function Modal({
    children,
    title = "Add Vacant"
}:IModalProps):React.ReactNode{

    const {setOpenModal} = useOpenModal((state)=>state);
    const handleCloseModal = ():void =>{
        setOpenModal(false);
    }
    return(
        <div className="content-modal">
            <div className="modal">
                <div className="modal-header">
                    <h4>{title}</h4>
                    <span onClick={handleCloseModal}>X</span>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>       
    )
}