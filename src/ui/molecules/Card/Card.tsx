import { DeleteIcon, EditIcon } from "@/assets/icons";
import { Button } from "../../atoms";

export default function Card({children}: {children: React.ReactNode}):React.ReactNode{
    return(
        <div className="card">
            <div className="card-body">
                {children}
            </div>
            <div className="card-footer">
                <Button 
                    icon={<EditIcon />} />
                <Button 
                    icon={<DeleteIcon />} />
            </div>
        </div>
    )
}