// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript

function outed(meet, boss) {
    let rating = 0;
    for (member in meet) {
        rating += meet[member]
    }
    return (rating + meet[boss]) / Object.keys(meet).length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'