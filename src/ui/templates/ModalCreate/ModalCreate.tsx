"use client";
import { ICompany } from "@/app/core/application/dto/company/companyResponse";
import { IVacant, IVacantAddRequest, IVacantErrorResponse } from "@/app/core/application/dto/vacant";
import { manageError } from "@/app/core/application/utils";
import vacantController from "@/app/infrastructure/controllers/vacantController";
import { Button } from "@/ui/atoms";
import { FormField, FormTextArea, SelectField } from "@/ui/molecules";
import { Modal } from "@/ui/organisms";
import { useRouter } from "next/navigation";


interface IModalCreateProps{
    formData: IVacantAddRequest,
    setFormData: (value:IVacantAddRequest) => void,
    initialFormData: IVacantAddRequest,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    selectValue:string,
    selectValueCompanyId:string,
    setSelectValue: (value:string) =>void
    setSelectValueCompanyId: (value:string) =>void
    companies: ICompany[]
}

export default function ModalCreate({
    formData,
    onChange,
    initialFormData,
    selectValue,
    selectValueCompanyId,
    setSelectValueCompanyId,
    setSelectValue,
    setFormData,
    companies,
}: IModalCreateProps):React.ReactNode{

    const router = useRouter();

    const handleCreate = async (): Promise<void> => {
        if (!formData.title || !formData.description) return;
        const vacantCreated: IVacant | IVacantErrorResponse = await vacantController.create(formData);
        console.log("vacant created", vacantCreated);
        manageError("Vacant created successfully", "Error to create vacant", vacantCreated);
        setFormData(initialFormData);
        router.refresh();
      };
    return(
        <Modal title="Add Vacant">
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
                placeholder="Enter the description..."
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
                onClick={handleCreate}
                type="button"
                text="Add"
                className="buttonModal"
              />
            </form>
        </Modal>
    )
}