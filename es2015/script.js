"use strict";

const carName = 'Suzuki';
const carYear = 2011;
const personYear = 1992;

function calculateAge (year) {
    const currentYear = 2020;
    const result = currentYear - year;
    return result;
}

function calculateAgeLog(year) {
    if (calculateAge(year) < 10) {
        console.log('возраст меньше 10 лет');
    } else {
        console.log('возраст меньше 10 лет');
    }
}

calculateAgeLog (carYear);
calculateAgeLog (personYear);