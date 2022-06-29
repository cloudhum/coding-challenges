// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript

function alphabetWar(fight) {
    const leftSide = {
        w: 4,
        p: 3,
        b: 2,
        s: 1
    }

    const rightSide = {
        m: 4,
        q: 3,
        d: 2,
        z: 1
    }

    let leftScore = 0;
    let rightScore = 0;

    for (let i = 0; i < fight.length; i++) {
        if (leftSide[fight[i]]) {
            leftScore += leftSide[fight[i]];
        }
        else if (rightSide[fight[i]]) {
            rightScore += rightSide[fight[i]];
        }
    }

    return leftScore == rightScore ? "Let's fight again!" : leftScore > rightScore ? "Left side wins!" : "Right side wins!";
}