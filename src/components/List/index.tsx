import { Itask } from '../../types/tasks'
import { Item } from './Item';
import style from "./List.module.scss";

interface Props {
    taskList: Itask[],
    selectTask: (taskSelec: Itask) => void,
}

const List = ({ taskList, selectTask }: Props) => {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudo do dia</h2>
            <ul>
                {taskList.map((item)=>{
                    return(
                    <Item
                    key={item.id}
                    selectTask={ selectTask }
                     { ...item }
                    />
                    )
                })}
            </ul>

        </aside>
    );
}
export default List;