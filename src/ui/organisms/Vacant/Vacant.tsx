import { Card } from "@/ui/molecules";
import "./vacantStyles.scss";
import { Button } from "@/ui/atoms";
import { IconsPlus } from "@/assets/icons";
import { IVacant } from "@/app/core/application/dto/vacant/vacantResponse";


interface IVacantProps{
    title:string
    vacancies: IVacant[]
}

export default function Vacant({title,vacancies}: IVacantProps):React.ReactNode{
    return(
        <section className="main-section ">
            <div className="section-title">
                <h3 className="title">{title}</h3>
                <Button
                    className="buttonNavigation"
                    icon={<IconsPlus />}
                    text="Add Vacant"
                 />
            </div>
            <div className="section-cards">
                {vacancies.map((vacant:IVacant,index:number)=>(
                    <Card key={index}>
                        <h4>{vacant.title}</h4>
                        <p>{vacant.description}</p>
                        <p>State: {vacant.status}</p>
                        <p>Company: {vacant.company?.name}</p>
                    </Card>
                ))}
            </div>
        </section>
    )
}