import { Input } from "@/ui/atoms";
import { SearchIcon } from "@/assets/icons";
import "./searchInputStyles.scss";

export default function SearchInput():React.ReactNode{
    return(
        <div className="search">
            <SearchIcon />
            <Input
                placeholder="search..."
            />
        </div>
    )
}