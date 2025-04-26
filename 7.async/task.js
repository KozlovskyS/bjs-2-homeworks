class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null
    }

    addClock(time, action) {  // добавляет новый звонок в коллекцию существующих
        if (!time || !action) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.find(item => item.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({
            callback: action,
            time: time,
            canCall: true
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }

    getCurrentFormattedTime() {
        return new Date().getHours() + ":" + new Date().getMinutes();
    }

    start() {   // запускает будильник
        if (this.intervalId) {
            return;
        }

        this.intervalId = setInterval(() => { //перебор массива будильников с интервалом 1000мс
            this.alarmCollection.forEach(item => {
                if (item.time === this.getCurrentFormattedTime() && item.canCall === true) {
                    item.canCall = false;
                    item.callback();
                }
            })
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null; // будильник должен удалять интервал
    }

    resetAllCalls() { // сбрасывает возможность запуска всех будильников
        this.alarmCollection.forEach(item => {
            item.canCall = true;
        });
    }

    clearAlarms() {    // удаляет все будильники и интервал
        this.stop();
        this.alarmCollection = [];
    }
}
