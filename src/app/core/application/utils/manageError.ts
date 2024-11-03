import { inputAlert } from "@/ui/atoms";
import { IVacant, IVacantErrorResponse } from "../dto/vacant";

export default function manageError(message: string, messageError:string, data: IVacant | IVacantErrorResponse) {
    if("message" in data){
        inputAlert(messageError, "error");
        return;
    }
    inputAlert(message, "success");
}