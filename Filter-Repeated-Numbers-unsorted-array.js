let myNums = [7, 7, 5, 7, 5, 5, 3, 1, 2, 3, 10, 20];

for(let i = 0; i < myNums.length; i++) {
    for(let j = i + 1; j < myNums.length; j++) {
        if(myNums[i] === myNums[j]) {
            myNums.splice(j, 1);
            j--;
        }
    }
}

console.log(myNums);

// Output is: [7, 5, 3, 1, 2, 10, 20]
