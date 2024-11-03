import "./inputStyles.scss";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    error?:boolean,
    className?:string
}

export default function Input({
    error,
    className,
    ...props
}:IInputProps):React.ReactNode{
    return(
        <>
            <input className={className} {...props} />
            {error && <p className="error">{`Is required the field ${props.name}`}</p>}
        </>
    )
}