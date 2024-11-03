import { TextArea } from "@/ui/atoms";
import "./formTextAreaStyles.scss";

interface IFormTextAreaProps{
    label:string,
    name: string,
    value: string,
    placeholder:string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>)=>void,
    error: boolean
}
export default function FormTextArea({label,name,value,placeholder,onChange, error}:IFormTextAreaProps):React.ReactNode{
    return(
        <div className="form-textarea">
            <label htmlFor={name}>{label}</label>
            <TextArea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                error={error}
            />
        </div>
    )
}