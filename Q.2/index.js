// Draw This pattern using while loop 
// **
// *
// **
// *



function printPattern1(rows) {
    for (let i = 1; i <= rows; i++) {
        if(i % 2 === 0) {
            console.log("*");
        } else {
            console.log("*".repeat(2));
        }
    }
}

printPattern1(4)