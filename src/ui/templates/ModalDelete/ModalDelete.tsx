"use client";
import { useIdState, useModalFooterMessageState, useOpenModal } from "@/app/core/application/global-state";
import { manageError, verifyExistDelete } from "@/app/core/application/utils";
import { Button, inputAlert } from "@/ui/atoms";
import { FormField } from "@/ui/molecules";
import { Modal } from "@/ui/organisms";
import { useState } from "react";
import "./modalDeleteStyles.scss";
import { VacantController } from "@/app/infrastructure/controllers";
import { useRouter } from "next/navigation";

export default function ModalDelete(): React.ReactNode {

    const router = useRouter();
    const {id} = useIdState((state)=>state);
    const {setModal} = useModalFooterMessageState((state)=>state);
    const {setOpenModal} = useOpenModal((state)=>state);
    const [value, setValue] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    const handleDelete = async(id:number | string): Promise<void> =>{
        const existDelete = verifyExistDelete(value); //Verify exist DELETE + NAME
        if(!existDelete){
            setError(true);
            return;
        }
        setError(false);
        console.log("delete",id);
        const vacantDeleted = await VacantController.delete(id);
        if("message" in vacantDeleted){
            inputAlert(vacantDeleted.message, "success");
            setModal({
                state: true,
                message: `${existDelete} has deleted successfully the vacant`,
                icon: <i>{vacantDeleted.message}</i>,
            });
            router.refresh();
            setOpenModal({state:false, type:""});
            return;
        }
        inputAlert(`Error to delete vacant STATUS:${vacantDeleted.status}`, "error");
    }
    return (
        <Modal
            title="Delete Vacant"
        >
            <div className="body">
                <FormField
                    label="VERIFY DELETE"   
                    name="verifyDelete"
                    value={value}
                    onChange={(e) => handleChange(e)}
                    error={error}
                    placeholder="Enter DELETE+NAME for delete vacant"
                />
                <div className="content-buttons">
                    <Button
                        className="buttonDelete"
                        text="I want to delete this vacant"
                        onClick={()=>handleDelete(id)}
                    />
                </div>
            </div>
        </Modal>
    )
}