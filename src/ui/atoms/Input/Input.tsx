import "./inputStyles.scss";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>{

}

export default function Input({
    ...props
}:IInputProps):React.ReactNode{
    return(
        <input className="input" {...props} />
    )
}