
import "./textAreaStyles.scss";

interface ITextAreaProps{
    error?:boolean,
    name:string,
    value:string,
    onChange:(e: React.ChangeEvent<HTMLTextAreaElement>)=>void,
    placeholder:string
}
export default function TextArea({
    error,
    name,
    value,
    onChange,
    placeholder,
    ...props
}:ITextAreaProps): React.ReactNode{
    return(
        <>
            <textarea 
                {...props}
                name={name}
                value={value}
                onChange={onChange}
                className="textarea" placeholder={placeholder}>
            </textarea>
            {error && <p className="error">{`Is required the field ${name}`}</p>}
        </>
    )
}