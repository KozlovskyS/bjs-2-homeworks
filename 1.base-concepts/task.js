"use strict"

function solveEquation(a, b, c) {
    let arr = [];
    const d = Math.pow(b, 2) - (4 * a * c);

    if (d < 0) {
        arr = [];
    } else if (d === 0) {
        arr.push(-b / (2 * a));
    } else {
        arr.push((-b + Math.sqrt(d)) / (2 * a));
        arr.push((-b - Math.sqrt(d)) / (2 * a));
    }

    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    const monthPercent = percent / 100 / 12;
    const creditBody = amount - contribution;

    // Платёж = S * (P + (P / (((1 + P)^n) - 1))), где: S — тело кредита, P — 1/12 процентной ставки (от 0 до 1), n — количество месяцев,
    const payment = creditBody * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));

    return +((payment * countMonths).toFixed(2));

}