import { HttpClientUtil } from "../utils";
import { IVacantAddRequest, IVacant, IVacantRequest, IVacantResponse,IVacantErrorResponse } from "@/app/core/application/dto/vacant";

export default class VacantService{
    private httpClientUtil: HttpClientUtil;

    constructor(){
        this.httpClientUtil = new HttpClientUtil();
    }

    async findAll({page,size}: IVacantRequest):Promise<IVacantResponse>{
        return await this.httpClientUtil.get<IVacantResponse>(`vacants?page=${page}&size=${size}`);
    }

    async create(vacant: IVacantAddRequest):Promise<IVacant | IVacantErrorResponse>{
        return await this.httpClientUtil.post<IVacant,IVacantAddRequest>("vacants",vacant);
    }

    async update(vacant:IVacantAddRequest, id:string | number):Promise<IVacant | IVacantErrorResponse>{
        return await this.httpClientUtil.put<IVacant, IVacantAddRequest>("vacants",vacant,id)
    }
    async delete(id:string | number):Promise<IVacant | IVacantErrorResponse>{
        return await this.httpClientUtil.delete<IVacant>("vacants",id);
    }
}