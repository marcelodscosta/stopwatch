import { Component } from 'react';
import style from "./Button.module.scss";

class Button extends Component <{title: string}> {
    render(){
        return(
            <button className={style.botao}>{this.props.title}</button>
        );
    }
}

export default Button;