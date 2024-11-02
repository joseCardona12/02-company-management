import { Input } from "@/ui/atoms";
import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";

interface IFormFieldProps<T extends FieldValues>{
    label:string,
    name:Path<T>,
    type?:string,
    control: Control<T>
    error?: FieldError,
    placeholder: string,
    id?:string,
}

export default function FormField <T extends FieldValues>({
    label,
    name,
    type,
    control,
    error,
    placeholder,
    id
}:IFormFieldProps<T>):React.ReactNode{
    return(
        <div className="form-field">
            <label htmlFor={id || label.toLocaleLowerCase()}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({field})=>(
                    <Input
                        id={id || label.toLocaleLowerCase()}
                        {...field}  
                        placeholder={placeholder}
                        error={error?.message}  
                        type={type} 
                    />
                )}
            
            />
        </div>
    )
}