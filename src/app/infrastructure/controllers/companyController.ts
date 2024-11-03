import { ICompanyAddRequest, ICompanyRequest, ICompanyResponse } from "@/app/core/application/dto/company";
import { ICompany, ICompanyErrorResponse } from "@/app/core/application/dto/company/companyResponse";
import CompanyService from "@/app/infrastructure/services/companyService";

class CompanyController{
    private companyService: CompanyService
    constructor(){
        this.companyService = new CompanyService();
    }

    async findAllByPagination({page,size}: ICompanyRequest):Promise<ICompanyResponse>{
        const data = await this.companyService.findAllByPagination({page,size});
        console.log("data company controller",data);
        return data;
    }

    async findAll():Promise<ICompany[]>{
        const data = await this.companyService.findAll();
        console.log("data company controller",data);
        return data;
    }

    async create(company: ICompanyAddRequest):Promise<ICompany | ICompanyErrorResponse>{
        const data = await this.companyService.create(company);
        console.log("data company controller",data);
        return data;
    }

    async update(company: ICompanyAddRequest, id:string | number):Promise<ICompany | ICompanyErrorResponse>{
        const data = await this.companyService.update(company,id);
        console.log("data company controller",data);
        return data;
    }
}

export default new CompanyController();