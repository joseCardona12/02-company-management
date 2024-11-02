import { Button } from "@/ui/atoms";
import { SuitcaseIcon, BuildingIcon } from "@/assets/icons";
import "./navigationStyles.scss";

export default function Navigation():React.ReactNode{
    return(
        <nav className="navigation">
            <Button
                className="buttonNavigation"
                icon={<SuitcaseIcon />}
                text="Vacants"
            />
            <Button
                className="buttonNavigation"
                icon={<BuildingIcon />}
                text="Companies"
            />
        </nav>
    )
}