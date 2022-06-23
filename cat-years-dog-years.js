// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

var humanYearsCatYearsDogYears = function (humanYears) {
    let catYears = 15;
    let dogYears = 15;

    for (let i = 1; i <= humanYears; i++) {
        if (i == 2) catYears += 9;
        if (i > 2) catYears += 4;
    }

    for (let i = 1; i <= humanYears; i++) {
        if (i == 2) dogYears += 9;
        if (i > 2) dogYears += 5;
    }

    return [humanYears, catYears, dogYears];
}
