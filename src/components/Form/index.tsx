import React from 'react';
import Button from '../Button';
import "./style.scss";

class Form extends React.Component {
    render(){
        return (
            <form className="novaTarefa">
                <div className="inputContainer">
                    <label htmlFor="task">
                        Adicione um novo Estudo
                    </label>
                    <input 
                    type="text" 
                    name="task" 
                    id="task" 
                    placeholder="O que você quer estudar?" 
                    required/>
                </div>

                <div className="inputContainer">
                <label htmlFor="time">
                        Adicione um novo Estudo
                    </label>
                    <input 
                    type="time" 
                    step="1"
                    name="time" 
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required/>
                </div>

            <Button />
            </form>
        );
    }
}

export default Form;