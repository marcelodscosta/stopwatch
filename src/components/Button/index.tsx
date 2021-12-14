import { Component } from 'react';
import style from "./Button.module.scss";

class Button extends Component <{
    title: string
    type: "button" | "submit" | "reset" | undefined,
    onClick: () => void,
}> {
    render(){
        const { type, title, onClick } = this.props;
        return(
            <button 
            type={type}
            onClick={onClick}
            className={style.botao}
            >{title}</button>
        );
    }
}

export default Button;