import { ICompanyAddRequest, ICompanyRequest, ICompanyResponse } from "@/app/core/application/dto/company";
import { HttpClientUtil } from "../utils";
import { ICompany, ICompanyErrorResponse } from "@/app/core/application/dto/company/companyResponse";

export default class CompanyService {
    private httpClientUtil: HttpClientUtil
    constructor(){
        this.httpClientUtil = new HttpClientUtil();
    }

    async findAllByPagination({page,size}: ICompanyRequest):Promise<ICompanyResponse>{
        return await this.httpClientUtil.get<ICompanyResponse>(`company?page=${page}&size=${size}`);
    }

    async findAll():Promise<ICompany[]>{
        return await this.httpClientUtil.get<ICompany[]>("company/all");
    }
    async create(company: ICompanyAddRequest):Promise<ICompany | ICompanyErrorResponse>{
        return await this.httpClientUtil.post<ICompany, ICompanyAddRequest>("company", company);
    }

    async update(company: ICompanyAddRequest, id:string | number):Promise<ICompany | ICompanyErrorResponse>{
        return await this.httpClientUtil.put<ICompany, ICompanyAddRequest>("company", company, id);
    }
}