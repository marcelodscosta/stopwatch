import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import { Stopwatch } from '../components/Stopwatch';
import { Itask } from '../types/tasks';
import style from "./App.module.scss";

const App = () => {
  const [ taskList, setTaskList ] = useState<Itask[]>([]);
  const [ select, setSelect ] = useState<Itask>();

  const selectTask = (taskSelect: Itask) => {
    setSelect(taskSelect);
    setTaskList(prevent => prevent.map(task =>({
      ...task,
      select: task.id === taskSelect.id ? true : false,
    })));
  }

  const endTask = () => {
    if(select) {
      setTaskList(ant => ant.map(task => {
        if(task.id === select.id){
          return {
            ...task,
            select: false,
            complet: true,
          }
        } else {
          return task;
        }
        
      }))
    }
  }

  return (
   <div className={style.AppStyle}>
     <Form setTaskList={ setTaskList }/>
     <List taskList={ taskList } selectTask={ selectTask }/>
     <Stopwatch 
     select = { select }
     endTask = { endTask }
     />
   </div>
  );
}

export default App;
