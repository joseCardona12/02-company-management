import { Navbar } from "@/ui/organisms";
import "./headerStyles.scss";

interface IHeaderProps{
    title:string,
}

export default function Header({title}: IHeaderProps):React.ReactNode{
    return(
        <header className="header flex-direction-column">
            <h2>{title}</h2>
            <Navbar />
        </header>
    )
}