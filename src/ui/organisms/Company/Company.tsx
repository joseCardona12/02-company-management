import { Card } from "@/ui/molecules";
import "./companyStyles.scss";
import { Button } from "@/ui/atoms";
import { IconsPlus } from "@/assets/icons";
import { ICompany } from "@/app/core/application/dto/company/companyResponse";
import { useOpenModal } from "@/app/core/application/global-state";


interface ICompanyProps{
    title:string
    companies: ICompany[]
}

export default function Company({title,companies}: ICompanyProps):React.ReactNode{
    const {openModal,setOpenModal} = useOpenModal((state)=>state);
    const handleOpenModal = ():void =>{
        console.log("open modal", openModal);
        setOpenModal({
            state:true,
            type:"ADD_COMPANY"
        });
    }

    return(
        <section className="main-section">
            <div className="section-title">
                <h3 className="title">{title}</h3>
                <Button
                    className="buttonNavigation"
                    icon={<IconsPlus />}
                    text="Add Company"
                    onClick={handleOpenModal}
                 />
            </div>
            <div className="section-cards">
                {companies.map((company:ICompany,index:number)=>(
                    <Card id={company.id} key={index} section="company">
                        <h4>{company.name}</h4>
                        <p>{company.location}</p>
                        <p>{company.contact}</p>
                    </Card>
                ))}
            </div>
        </section>
    )
}