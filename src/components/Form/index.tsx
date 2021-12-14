import React from 'react';
import { Itask } from '../../types/tasks';
import Button from '../Button';
import style from "./Form.module.scss";
import { v4 as uuidv4} from 'uuid';



class Form extends React.Component <{
    setTaskList: React.Dispatch<React.SetStateAction<Itask[]>>
}>{
    state = {
        task: "",
        time: "00:00",
    }
    
    addTask = (event: React.FormEvent<HTMLFormElement>) => {
    const { setTaskList } = this.props;
    event.preventDefault();
    setTaskList(ant => 
        [...ant,
             {...this.state, 
                select: false, 
                complet: false, 
                id: uuidv4()
            }
            ]);
    this.setState({
        task: '',
        time: '00:00',
    });
    
    }
    render(){
        return (
            <form className={style.novaTarefa} onSubmit={this.addTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Adicione um novo Estudo
                    </label>
                    <input 
                    type="text" 
                    name="task" 
                    id="task" 
                    placeholder="O que você quer estudar?" 
                    value={ this.state.task }
                    required
                    onChange={ (event => this.setState({ task: event.target.value}))}
                    />
                </div>

                <div className={style.inputContainer}>
                <label htmlFor="time">
                        Tempo
                    </label>
                    <input 
                    type="time" 
                    step="1"
                    name="time" 
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    value={ this.state.time }
                    required
                    onChange={ event => this.setState({ time: event.target.value})}
                    />
                </div>

            <Button 
            title="Adicionar"
            type="submit"
            onClick={()=> console.log("Clicado Form")}
            />
            </form>
        );
    }
}

export default Form;