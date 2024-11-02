interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    icon?: React.ReactElement
    text:string
}

export default function Button({
    text,
    icon,
    ...props
}:IButtonProps):React.ReactNode {
    return(
        <button {...props}>
            {icon}
            {text}
        </button>
    )
}