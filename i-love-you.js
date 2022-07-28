// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

function howMuchILoveYou(nbPetals) {
    let phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    if (nbPetals > 6) {
        if (nbPetals % 6 == 0) return phrases[5];
        else return phrases[(nbPetals % 6) - 1];
    }
    else {
        if (nbPetals == 0) return phrases[0];
        return phrases[nbPetals - 1]
    }
}