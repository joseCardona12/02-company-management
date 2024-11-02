import "./buttonStyles.scss";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    icon?: React.ReactElement
    text?:string,
    className: string,
}

export default function Button({
    text,
    icon,
    className,
    ...props
}:IButtonProps):React.ReactNode {
    return(
        <button {...props} className={className}>
            {icon}
            {text}
        </button>
    )
}