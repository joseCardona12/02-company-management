import "./buttonStyles.scss";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    icon?: React.ReactElement
    text?:string,
    className: string,
    disabled?:boolean
}

export default function Button({
    text,
    icon,
    className,
    disabled = false,
    ...props
}:IButtonProps):React.ReactNode {
    return(
        <button {...props} className={className} disabled={disabled}>
            {icon}
            {text}
        </button>
    )
}