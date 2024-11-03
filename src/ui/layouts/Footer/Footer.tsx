import { useModalFooterMessageState } from "@/app/core/application/global-state";
import { ModalFooter, Pagination } from "@/ui/molecules";
import { useEffect } from "react";

export default function Footer():React.ReactNode{
    const {modal, setModal} = useModalFooterMessageState((state)=>state);

    useEffect(()=>{
        if(modal.state){
            setTimeout(()=>{
                setModal({
                    state: false,
                    message: "",
                    icon: "",
                })
            }, 3000)    
        }
    }, [modal])
    return(
        <footer className="footer">

            {modal && 
                <ModalFooter
                    message={modal.message}
                />
            }
            <Pagination />
        </footer>
    )
}