import { IVacantResponse } from "@/app/core/application/dto/vacant/vacantResponse";
import { HttpClientUtil } from "../utils";
import { IVacantRequest } from "@/app/core/application/dto/vacant/vacantRequest";

export default class VacantService{
    private httpClientUtil: HttpClientUtil;

    constructor(){
        this.httpClientUtil = new HttpClientUtil();
    }

    async findAll({page,size}: IVacantRequest):Promise<IVacantResponse>{
        return await this.httpClientUtil.get<IVacantResponse>(`vacants?page=${page}&size=${size}`);
    }
}