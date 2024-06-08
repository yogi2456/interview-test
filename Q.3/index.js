// Print 1 to 10 number sequence ly using while loop-
// 1234
// 123
// 12
// 1

function printNumberPattern() {
    let row = 4;

    while (row >= 1) {
        let num = '';
        for (let i = 1; i <= row; i++) {
            num += i;
        }
        console.log(num);
        row--;
    }
}

printNumberPattern()