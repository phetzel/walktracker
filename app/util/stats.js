export const totalDistance = walks => {
    const dist = 
        walks.map(walk => walk.distance)
        .reduce((prev, curr) => prev + curr, 0);

    return dist.toFixed(2);
}

export const aveDistance = walks => {
    const ave = totalDistance(walks) / walks.length;
    return ave.toFixed(2);
}

export const totalTime = walks => {
    const times = 
        walks.map(walk => walk.time)
        .reduce((prev, curr) => +prev + +curr, 0);

    return times;
}

export const aveTime = walks => {
    const ave = totalTime(walks) / walks.length;
    return ave;
}

export const avePace = walks => {
    const distance = totalDistance(walks);
    const time = totalTime(walks);
    const ave = distance / time;
    return ave.toFixed(2);
}

const TIMES = {
    'all': 'All Time',
    'month': 'Last Month',
    'week': 'Last Week'
}

export const timeDisplay = time => {
    return TIMES[time];
}

const ACTIVITIES = {
    'walk': 'Walks',
    'bike': 'Bike Rides',
    'roller-skate': 'Skating'
};

export const actDisplay = act => {
    if (!act) return 'Total Trips';
    return ACTIVITIES[act];
}

