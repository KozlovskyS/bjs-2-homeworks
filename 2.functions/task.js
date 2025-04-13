function getArrayParams(...arr) {
    if (arr.length === 0) {
        return 0;
    }

    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
// альтернативное суммирование массива
    function summareArr (accum, element) {
        return (accum + element);
    }
    const summa = arr.reduce(summareArr, 0);
// должны быть одинаковые    
    console.log(`сумма= ${summa}`);
    console.log(`сумма1= ${sum}`);

    let avg = +((sum / arr.length).toFixed(2)); // среднее округленное до двух знаков

    return {
        min: min,
        max: max,
        avg: avg
    };
}

function summElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let element of arr) {
        sum = sum + element;
    }

    return sum;
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }

    let max = Math.max(...arr);
    let min = Math.min(...arr);

    return max - min;
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }

    let sumEvenElement = 0; // сумма четных
    let sumOddElement = 0; // сумма нечетных

    for (let element of arr) {
        if (element % 2 === 0) {
            sumEvenElement += element;
        } else {
            sumOddElement += element;
        }
    }

    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }

    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let element of arr) {
        if (element % 2 === 0) {
            sumEvenElement += element;
            countEvenElement += 1;
        }
    }
    return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;

    for (let element of arrOfArr) {
        const maxFuncResult = func(...element);

        if (maxFuncResult > maxWorkerResult) {
            maxWorkerResult = maxFuncResult;
        }
    }

    return maxWorkerResult;
}