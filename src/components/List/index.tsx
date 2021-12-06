import React from 'react';
import { Item } from './Item';
import style from "./List.module.scss";


function List () {
    const taskList = [{
        task: "React",
        time: "02:00:00",
    },
    {
        task: "JavaScript",
        time: "01:00:00",
    },
    {
        task: "TypeScript",
        time: "03:00:00",
    }
        

];
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudo do dia</h2>
            <ul>
                {taskList.map((item, index)=>{
                    return(
                    <Item key={index} { ...item }/>
                    )
                })}
            </ul>

        </aside>
    );
}
export default List;