import { Card } from "@/ui/molecules";
import "./vacantStyles.scss";


interface IVacantProps{
    title:string
}

export default function Vacant({title}: IVacantProps):React.ReactNode{
    return(
        <section className="main-section ">
            <div className="section-title">
                <h3 className="title">{title}</h3>
            </div>
            <div className="section-cards">
                <div>
                    <Card>
                        <div>card</div>
                    </Card> 
                </div>
            </div>
        </section>
    )
}