import style from './Watch.module.scss';
export const Watch = () => {
    return (
        <div>
            <span  className={ style.relogioNumero }>0</span>
            <span className={ style.relogioNumero }>0</span>
            <span className={ style.relogioDivisao }>:</span>
            <span className={ style.relogioNumero }>0</span>
            <span className={ style.relogioNumero }>0</span>
        </div>
    );
}