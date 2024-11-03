import "./modalFooterStyles.scss";
interface IModalFooterProps{
    message: string,
    icon?: React.ReactElement
}
export default function ModalFooter({message, icon}: IModalFooterProps):React.ReactNode{
    return(
        <div className="modal-footer">
            {icon}
            <p>{message}</p>
        </div>
    )
}