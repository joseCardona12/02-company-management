import { ICompanyRequest, ICompanyResponse } from "@/app/core/application/dto/company";
import { HttpClientUtil } from "../utils";

export default class CompanyService {
    private httpClientUtil: HttpClientUtil
    constructor(){
        this.httpClientUtil = new HttpClientUtil();
    }

    async findAllByPagination({page,size}: ICompanyRequest):Promise<ICompanyResponse>{
        return await this.httpClientUtil.get<ICompanyResponse>(`company?page=${page}&size=${size}`);
    }
}