import style from '../List.module.scss';

interface Props {
task: string,
time: string,
}
export const Item = ({ task, time }: Props) => {
return (
    <li className={ style.item }>
        <h3>{ task }</h3>
        <span>{ time }</span>
    </li>
)

}