// https://www.codewars.com/kata/557af4c6169ac832300000ba/train/javascript

function removeRotten(bagOfFruits) {
    if (bagOfFruits == null) return []
    return bagOfFruits.map(fruit => {
        if (fruit.includes("rotten")) return fruit.slice(6).toLowerCase()
        else return fruit.toLowerCase()
    })
}