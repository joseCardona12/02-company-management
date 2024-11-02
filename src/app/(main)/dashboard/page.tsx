import { Section } from "@/ui/templates";
import { Vacant } from "@/ui/organisms";
import "./dashboardStyles.scss";
import ProviderPagination from "@/app/ProviderPagination";


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
    const size: number = searchParams.totalPage ? parseInt(searchParams.totalPage) : 1;
    return (
        <ProviderPagination
        pagination={{page,size}}
        > 
            <div className="dashboard">
                <Section>
                    <Vacant
                        title="Vacants"
                    />
                </Section>
            </div>
        </ProviderPagination>
    )
}