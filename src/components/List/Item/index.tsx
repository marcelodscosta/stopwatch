import { Itask } from '../../../types/tasks';
import style from '../List.module.scss';

interface Props extends Itask {
    selectTask: (selectTask:Itask) => void,
}

export const Item = ({ 
    task, 
    time, 
    select, 
    complet, 
    id,
    selectTask, 
}: Props) => {

return (
    <li 
    className={ `${style.item} 
    ${select ? style.itemSelecionado : ''} ` }
    onClick={()=> selectTask({
        task,
        complet,
        id,
        select,
        time
    })}
    >
        <h3>{ task }</h3>
        <span>{ time }</span>
    </li>
)

}