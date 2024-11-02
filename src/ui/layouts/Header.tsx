interface IHeaderProps{
    title:string,
}

export default function Header({title}: IHeaderProps):React.ReactNode{
    return(
        <header className="header">
            <h2>{title}</h2>
        </header>
    )
}