import { ICompanyAddRequest } from "@/app/core/application/dto/company";
import { ICompany, ICompanyErrorResponse } from "@/app/core/application/dto/company/companyResponse";
import { useIdState } from "@/app/core/application/global-state";
import { manageError } from "@/app/core/application/utils";
import { CompanyController } from "@/app/infrastructure/controllers";
import { Button } from "@/ui/atoms";
import { FormField } from "@/ui/molecules";
import { Modal } from "@/ui/organisms";
import { useRouter } from "next/navigation";


interface IModalUpdateCompanyProps{
    formData: ICompanyAddRequest,
    setFormData: (value:ICompanyAddRequest) => void,
    initialFormData: ICompanyAddRequest
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export default function ModalUpdateCompany({
    formData,
    setFormData,
    initialFormData,
    onChange
}:IModalUpdateCompanyProps):React.ReactNode{
    
    const router = useRouter();
    const {id} = useIdState((state) => state);

    const handleUpdate = async (): Promise<void> => {
        if(!formData.name || !formData.contact || !formData.location) return;
        const companyUpdated = await CompanyController.update(formData, id);
        console.log("companyUpdated", companyUpdated);
        manageError("Company updated successfully", "Error to update vacant", companyUpdated);
        setFormData(initialFormData);
        router.refresh();
    }
    return(
        <Modal title="Update Company">
            <form title="Update Company">
                <FormField
                    label="Name"
                    name="name"
                    value={formData.name}   
                    onChange={onChange}
                    error={false}
                />
                <FormField
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={onChange}
                    error={false}
                />
                <FormField
                    label="Contact"
                    name="contact"
                    value={formData.contact}
                    onChange={onChange}
                    error={false}
                />
                <Button
                    className="buttonModal"
                    text="Update"
                    onClick={handleUpdate}
                    type="button"
                />
            </form>
        </Modal>
    )
}