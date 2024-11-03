import { Section } from "@/ui/templates";
import "./dashboardStyles.scss";
import ProviderPagination from "@/app/ProviderPagination";
import { IVacantResponse } from "@/app/core/application/dto/vacant/vacantResponse";
import { VacantController, CompanyController } from "@/app/infrastructure/controllers";
import ProviderSection from "@/app/ProviderSection";
import { ICompanyResponse } from "@/app/core/application/dto/company";
import { ICompany } from "@/app/core/application/dto/company/companyResponse";
import ProviderLoading from "@/app/ProviderLoading";


interface IDashboardProps{
    searchParams: {
        page: string,
        totalPage: string,
        name:string
    }
}

export const generateMetadata = async({searchParams}: IDashboardProps):Promise<{title:string, description:string}> =>{
    const page:number = parseInt(searchParams.page) | 1;
    return {
        title: `Dashboard ${page}`,
        description: `Company Management`
    }
}
export default async function Dashboard({searchParams}: IDashboardProps) {
    const page: number = searchParams.page ? parseInt(searchParams.page) : 1;
    const size: number = searchParams.totalPage ? parseInt(searchParams.totalPage) : 6;

    const vacancies: IVacantResponse = await VacantController.findAll({page,size});
    const companies: ICompanyResponse = await CompanyController.findAllByPagination({page,size});
    const companiesAll: ICompany[] = await CompanyController.findAll();
    return (
        <ProviderPagination
        pagination={{page,totalPage: vacancies.totalPages}}
        > 
            <ProviderLoading>
                <div className="dashboard">
                    <Section>
                        <ProviderSection
                            vacancies={vacancies}
                            companies={companies}
                            companiesAll={companiesAll}
                        />
                    </Section>
                </div>
            </ProviderLoading>
        </ProviderPagination>
    )
}