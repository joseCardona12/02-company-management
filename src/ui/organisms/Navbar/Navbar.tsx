import { IconsPlus } from "@/assets/icons";
import { Button } from "@/ui/atoms";
import { Navigation, SearchInput } from "@/ui/molecules";
import "./navbarStyles.scss";

export default function Navbar():React.ReactNode{
    return(
        <div className="content-navbar">
            <Navigation />
            <SearchInput />
        </div>
    )
}