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
                <Card>
                    <>
                        <h4>Frontend</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                    </>
                </Card> 
                <Card>
                    <>
                        <h4>Frontend</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                    </>
                </Card> 
                <Card>
                    <>
                        <h4>Frontend</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                    </>
                </Card> 
                <Card>
                    <>
                        <h4>Frontend</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                    </>
                </Card> 
                <Card>
                    <>
                        <h4>Frontend</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                    </>
                </Card> 
                <Card>
                    <>
                        <h4>Frontend</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                    </>
                </Card> 
            </div>
        </section>
    )
}