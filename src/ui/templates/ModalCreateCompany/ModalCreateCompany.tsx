import { ICompanyAddRequest } from "@/app/core/application/dto/company";
import { ICompany, ICompanyErrorResponse } from "@/app/core/application/dto/company/companyResponse";
import { manageError } from "@/app/core/application/utils";
import { CompanyController } from "@/app/infrastructure/controllers";
import { Button } from "@/ui/atoms";
import { FormField } from "@/ui/molecules";
import { Modal } from "@/ui/organisms";
import { useRouter } from "next/navigation";


interface IModalCreateCompanyProps{
    formData: ICompanyAddRequest,
    setFormData: (value:ICompanyAddRequest) => void,
    initialFormData: ICompanyAddRequest
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export default function ModalCreateCompany({
    formData,
    setFormData,
    initialFormData,
    onChange
}:IModalCreateCompanyProps):React.ReactNode{
    
    const router = useRouter();

    const handleCreate = async (): Promise<void> => {
        if (!formData.name || !formData.location || !formData.contact) return;
        const companyCreated: ICompany | ICompanyErrorResponse = await CompanyController.create(formData);
        console.log("company created", companyCreated);
        manageError("Company created successfully", "Error to create company", companyCreated);
        setFormData(initialFormData);
        router.refresh();
    }
    return(
        <Modal title="Add Company">
            <form title="Add Company">
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
                    text="Add"
                    onClick={handleCreate}
                    type="button"
                />
            </form>
        </Modal>
    )
}