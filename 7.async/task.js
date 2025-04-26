class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, action) {
        if (!time || !action) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.find(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({
            callback: action,
            time: time,
            canCall: true
        });
    }

    removeClock(time) {

    }

    getCurrentFormattedTime() {

    }

    start() {

    }
}