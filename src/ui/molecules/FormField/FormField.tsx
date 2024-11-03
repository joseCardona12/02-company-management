import { Input } from "@/ui/atoms";

interface IFormFieldProps{
    label:string,
    name:string,
    value:string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error: boolean,
    placeholder?:string
}

export default function FormField({label,name,value,onChange, error, placeholder}:IFormFieldProps):React.ReactNode{
    return(
        <div className="form-field">
            <label htmlFor={name}>{label}</label>
            <Input
                className="input inputModal"
                name={name}
                value={value}
                onChange={onChange}
                error={error}
                placeholder={placeholder}
            />
        </div>
    )
}