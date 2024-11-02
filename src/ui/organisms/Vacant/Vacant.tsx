import { Card } from "@/ui/molecules";
import "./vacantStyles.scss";
import { Button } from "@/ui/atoms";
import { IconsPlus } from "@/assets/icons";


interface IVacantProps{
    title:string
}

export default function Vacant({title}: IVacantProps):React.ReactNode{
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
                <Card>
                    <>
                        <h4>Frontend</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>State: OPEN</p>
                        <p>Company: TechCorp</p>
                    </>
                </Card>  
                <Card>
                    <>
                        <h4>Frontend</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>State: OPEN</p>
                        <p>Company: TechCorp</p>
                    </>
                </Card> 
                <Card>
                    <>
                        <h4>Frontend</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>State: OPEN</p>
                        <p>Company: TechCorp</p>
                    </>
                </Card> 
                <Card>
                    <>
                        <h4>Frontend</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>State: OPEN</p>
                        <p>Company: TechCorp</p>
                    </>
                </Card> 
                <Card>
                    <>
                        <h4>Frontend</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>State: OPEN</p>
                        <p>Company: TechCorp</p>
                    </>
                </Card> 
            </div>
        </section>
    )
}