import { Component } from 'react';
import style from "./Button.module.scss";

class Button extends Component <{
    title: string
    type: "button" | "submit" | "reset" | undefined
}> {
    render(){
        const { type, title } = this.props;
        return(
            <button 
            type={type} 
            className={style.botao}
            >{title}</button>
        );
    }
}

export default Button;