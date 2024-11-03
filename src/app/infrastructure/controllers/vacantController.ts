import { IVacant, IVacantAddRequest, IVacantErrorResponse, IVacantRequest, IVacantResponse } from "@/app/core/application/dto/vacant";
import { VacantService } from "../services";

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

    async create(vacant: IVacantAddRequest):Promise<IVacant | IVacantErrorResponse>{
        const data = await this.vacantService.create(vacant);
        console.log("data controller", data);
        return data
    }

    async update(vacant:IVacantAddRequest, id:string | number):Promise<IVacant | IVacantErrorResponse>{
        const data = await this.vacantService.update(vacant,id);
        return data;
    }
}

export default new VacantController();