import style from "./Button.module.scss";

interface Props {
    title: string
    type: "button" | "submit" | "reset" | undefined,
    onClick: () => void,
}
const Button = ({ title, type, onClick }: Props) => {
    return (
        <button 
        className={ style.botao } 
        type={ type } 
        onClick={ onClick }
        >{ title }</button>
    );
}

export default Button;