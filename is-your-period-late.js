//https://www.codewars.com/kata/578a8a01e9fd1549e50001f1/javascript

function periodIsLate(last, today, cycleLength) {
    // To calculate the time difference of two dates
    let Difference_In_Time = today.getTime() - last.getTime();
    // To calculate the no. of days between two dates
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Difference_In_Days > cycleLength;
}
