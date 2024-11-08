"use client";
import { ICompany } from "@/app/core/application/dto/company/companyResponse";
import { IVacantAddRequest } from "@/app/core/application/dto/vacant";
import { useIdState, useVacantsState } from "@/app/core/application/global-state";
import { manageError, searchElementById } from "@/app/core/application/utils";
import { VacantController } from "@/app/infrastructure/controllers";
import { Button } from "@/ui/atoms";
import { FormField, FormTextArea, SelectField } from "@/ui/molecules";
import { Modal } from "@/ui/organisms";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


interface IModalProps{
    formData: IVacantAddRequest
    setFormData: (value:IVacantAddRequest) => void
    initialFormData: IVacantAddRequest
    selectValue:string
    selectValueCompanyId:string
    setSelectValue: (value:string) =>void
    setSelectValueCompanyId: (value:string) =>void
    companies: ICompany[]
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export default function ModalUpdate({
    formData,
    setFormData,
    onChange,    
    initialFormData,
    selectValue,    
    selectValueCompanyId,
    setSelectValue,
    setSelectValueCompanyId,
    companies
}:IModalProps): React.ReactNode {

    const {id} = useIdState((state)=>state); // Get id selected for user
    const {vacants} = useVacantsState((state)=>state);
    const router = useRouter();
    const handleUpdate = async():Promise<void> =>{
        if(!formData.title || !formData.description) return;
        const vacantUpdated = await VacantController.update(formData, id);
        console.log("vacantUpdated", vacantUpdated);
        manageError("Vacant updated successfully", "Error to update vacant", vacantUpdated);
        setFormData(initialFormData);
        router.refresh();
    }
    /* useEffect(()=>{
      const vacantForUpdate = searchElementById(vacants, parseInt(id.toString()));
      if(!vacantForUpdate) return;
      setFormData({
        title: vacantForUpdate.title,
        description: vacantForUpdate.description,
        status: vacantForUpdate.status,
        companyId: vacantForUpdate.company?.name.toString() || "0",
      });
    }) */
    return(
        <Modal title="Edit Vacant">
            <form className="form">
              <FormField
                label="Title"
                name="title"
                value={formData.title}
                onChange={onChange}
                error={!formData.title}
              />
              <FormTextArea
                label="Description"
                name="description"
                value={formData.description}
                onChange={onChange}
                placeholder="Enter the new description..."
                error={!formData.description}
              />
              <SelectField
                label="Status"
                name="status"
                value={selectValue}
                options={["ACTIVE", "DESACTIVE", "PENDING"]}
                valueDefault="select status"
                setValue={setSelectValue}
              />
              <SelectField
                label="Companies"
                name="companyId"
                value={selectValueCompanyId}
                options={companies.map((company) => company.name)}
                valueDefault="select Company"
                setValue={setSelectValueCompanyId}
              />
              <Button
                onClick={handleUpdate}
                type="button" 
                text="Edit"
                className="buttonModal"
              />
            </form>
        </Modal>
    )
}