export const distDisplay = dist => {
    return `${dist.toFixed(2)} km`;
}

export const dateDisplay = datetime => {
    const dateArr = datetime.split('T')[0].split('-');
    return `${dateArr[1]}-${dateArr[2]}-${dateArr[0]}`;
}

export const paceDisplay = (dist, timer) => {
    const time = timer.split(':');
}