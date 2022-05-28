// https://www.codewars.com/kata/5202ef17a402dd033c000009/javascript

function titleCase(title, minorWords) {
    if (title == ''){
        return ''
    }
    title = title.toLowerCase().split(' ')
    let firstWord = title[0]
    firstWord = firstWord[0].toUpperCase() + firstWord.substr(1);
    title = title.slice(1)
    if (minorWords) {
        minorWords = minorWords.toLowerCase().split(' ')
    }
    let fixedCase = title.map(word => {
        if (minorWords && minorWords.includes(word)) {
            return word;
        }
        else return word[0].toUpperCase() + word.slice(1)
    })

    return (firstWord + " " + fixedCase.join(' ')).trim();
}