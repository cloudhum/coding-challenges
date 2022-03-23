// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/javascript

function DNAStrand(dna) {
    dna = dna.split("")
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] == "A")
            dna[i] = "T"
        else if (dna[i] == "T")
            dna[i] = "A"
        else if (dna[i] == "C")
            dna[i] = "G"
        else if (dna[i] == "G")
            dna[i] = "C"
    }
    return dna.join("")
}