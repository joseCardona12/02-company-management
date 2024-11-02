import { Section } from "@/ui/templates";
import { Vacant } from "@/ui/organisms";
import "./dashboardStyles.scss";
import ProviderPagination from "@/app/ProviderPagination";
import { IVacantResponse } from "@/app/core/application/dto/vacant/vacantResponse";
import { vacantController } from "@/app/infrastructure/controllers";
import ProviderSection from "@/app/ProviderSection";


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

    const vacancies: IVacantResponse = await vacantController.findAll({page,size});
    return (
        <ProviderPagination
        pagination={{page,totalPage: vacancies.totalPages}}
        > 
            <div className="dashboard">
                <Section>
                    <ProviderSection
                        vacancies={vacancies}
                        companies={{}}
                    />
                </Section>
            </div>
        </ProviderPagination>
    )
}