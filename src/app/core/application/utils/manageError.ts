import { inputAlert } from "@/ui/atoms";
import { IVacant, IVacantErrorResponse } from "../dto/vacant";
import { ICompany, ICompanyErrorResponse } from "../dto/company/companyResponse";

export default function manageError(message: string, messageError:string, data: IVacant | IVacantErrorResponse | ICompany | ICompanyErrorResponse) {
    if("message" in data){
        inputAlert(messageError, "error");
        return;
    }
    inputAlert(message, "success");
}