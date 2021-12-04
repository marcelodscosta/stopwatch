import React from 'react';
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
                {taskList.map(({task, time}, index)=>{
                    return(
                    <li key={index} className="item">
                        <h3>{task}</h3>
                        <span>{time}</span>
                    </li>
                    )
                })}
            </ul>

        </aside>
    );
}
export default List;