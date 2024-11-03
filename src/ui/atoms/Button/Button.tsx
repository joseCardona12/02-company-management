import "./buttonStyles.scss";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    icon?: React.ReactElement
    text?:string,
    className: string,
    disabled?:boolean,
    type?:"submit" | "reset" | "button",
}

export default function Button({
    text,
    icon,
    className,
    type,
    disabled = false,
    ...props
}:IButtonProps):React.ReactNode {
    return(
        <button {...props} className={className} disabled={disabled} type={type}>
            {icon}
            {text}
        </button>
    )
}