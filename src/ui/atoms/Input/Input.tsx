import "./inputStyles.scss";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    error?:string
}

export default function Input({
    error,
    ...props
}:IInputProps):React.ReactNode{
    return(
        <>
            <input className="input" {...props} />
            {error && <p className="error">{error}</p>}
        </>
    )
}