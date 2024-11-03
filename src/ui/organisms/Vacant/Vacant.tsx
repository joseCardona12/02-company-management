import { Card } from "@/ui/molecules";
import "./vacantStyles.scss";
import { Button } from "@/ui/atoms";
import { IconsPlus } from "@/assets/icons";
import { IVacant } from "@/app/core/application/dto/vacant/vacantResponse";
import { useOpenModal } from "@/app/core/application/global-state";


interface IVacantProps{
    title:string
    vacancies: IVacant[]
}

export default function Vacant({title,vacancies}: IVacantProps):React.ReactNode{
    const {setOpenModal} = useOpenModal((state)=>state);
    const handleOpenModal = ():void =>{
        setOpenModal({
            state:true,
            type:"ADD_VACANT"
        });
    }
    return(
        <section className="main-section ">
            <div className="section-title">
                <h3 className="title">{title}</h3>
                <Button
                    className="buttonNavigation"
                    icon={<IconsPlus />}
                    text="Add Vacant"
                    onClick={handleOpenModal}
                 />
            </div>
            <div className="section-cards">
                {vacancies.map((vacant:IVacant,index:number)=>(
                    <Card key={index} id={vacant.id}>
                        <h4>{vacant.title}</h4>
                        <p>{vacant.description}</p>
                        <p>State: <span style={{backgroundColor: "var(--color-purple-vacancy-normal)"}}>{vacant.status}</span></p>
                        <p>Company: {vacant.company?.name}</p>
                    </Card>
                ))}
            </div>
        </section>
    )
}