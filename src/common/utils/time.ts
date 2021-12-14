export const timeToSeconds = (time: string) => {
    const [hour = 0, minute = 0, second = 0 ] = time.split(":");
    const hourToSecond = Number(hour) * 3600;
    const minuteToSecond = Number(minute) * 60;
    return  (hourToSecond + minuteToSecond + Number(second));
}