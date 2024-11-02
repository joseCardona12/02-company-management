import { IVacantResponse } from "@/app/core/application/dto/vacant/vacantResponse";
import { VacantService } from "../services";
import { IVacantRequest } from "@/app/core/application/dto/vacant/vacantRequest";

class VacantController{
    private vacantService: VacantService
    constructor(){
        this.vacantService = new VacantService();
    }

    async findAll(pagination: IVacantRequest):Promise<IVacantResponse>{
        const data = await this.vacantService.findAll(pagination);
        console.log("data controller", data);
        return data;
    }
}

export default new VacantController();