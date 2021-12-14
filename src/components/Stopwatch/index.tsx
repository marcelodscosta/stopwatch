import Button from "../Button";
import { Watch } from "./Watch";
import style from './Stopwatch.module.scss';
import { timeToSeconds } from "../../common/utils/time";
import { Itask } from "../../types/tasks";
import { useEffect, useState } from "react";

interface Props {
    select: Itask | undefined,
    endTask: () => void
}

export const Stopwatch = ({ select, endTask }: Props) => {
    const [time, setTime] = useState<number>();

    useEffect(()=>{
        if(select?.time){
            setTime(timeToSeconds(select.time));
        }
    },[select])

    const regres = (time: number = 0) => {
        setTimeout(()=>{
            if(time > 0) {
                setTime(time - 1);
                return regres(time - 1);
            }
            endTask();   
        }, 1000);
    }

    return (
        <div className={ style.cronometro }>
            <p className={ style.titulo }>Escolha um card e inicie o cronômetro</p>

            <div className={ style.relogioWrapper }>
                <Watch time = { time }/>
            </div>

            <Button 
            type="button" 
            title="Começar" 
            onClick={ () => regres(time) }/>
        </div>
    );
}