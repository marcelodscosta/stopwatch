import style from './Watch.module.scss';

interface Props {
    time: number | undefined,
}
export const Watch = ({ time = 0 }: Props) => {

    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);

    const [ minDez, minUni ] = String(min).padStart(2, '0');
    const [ secDez, secUni ] = String(sec).padStart(2, '0');
    return (
        <div>
            <span  className={ style.relogioNumero }>{ minDez }</span>
            <span className={ style.relogioNumero }>{ minUni }</span>
            <span className={ style.relogioDivisao }>:</span>
            <span className={ style.relogioNumero }>{ secDez }</span>
            <span className={ style.relogioNumero }>{ secUni }</span>
        </div>
    );
}