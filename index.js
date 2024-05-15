// ### Exercise #3

// Write a JavaScript program to construct the following pattern, using a nested for loop.

// ```
// *
// * *
// * * *
// * * * *
// * * * * *
// ```



for (let i=0; i <= 5 ; i++) {
    let stars = "";
    for (j = 0; j < i; j++) {
        stars = stars + '* ';
    }
    console.log(stars);
}



// ### Exercise #4

// Write while loops to do the following:

// ```

// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.

let xValue = 20;
while (xValue > 0) {
    
    xValue = xValue - 0.5;
    console.log(xValue);
}

// ```
// - Print all the odd numbers between 1 - 100.
// ```

let odd = -1;
for (let i=0; i < 50; i++) {
    odd =  odd + 2 ;
    console.log(odd);
}

// ```
// - Write a method with a while loop to print 1 through n in square brackets.
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
// ```
function serials() {
    let i = 1;
    while ( i <= 10) {
        console.log("[" + i + "]");
        i++
    }
}

serials();

// ```
// - Write a method with a while loop that computes the sum of first n positive integers:
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190

function cal(n) {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    console.log(sum)
}
 cal(2)

