let myNums = [3, 3, 2, 2, 1, 1, 2, 3, 3, 3, 4, 5, 5, 6, 7, 8],
    temp,
    myFilterNums = [];

// Function To Sort Elements By Using Bubble Sort Algorithm
function BbubbleSort() {
    for(let i = 0; i < myNums.length; i++) {
        for(let j = 0; j < myNums.length; j++) {
            if(myNums[j] > myNums[j + 1]) {
                swap(temp, j);
            }
        }
    }
}

BbubbleSort();

// Function To Swap Numbers
function swap(temp, j) {
    temp = myNums[j + 1];
    myNums[j + 1] = myNums[j];
    myNums[j] = temp;
}

// Function To Filter Repeat Numbers After Sorting
function filterRepeatElementFromArray() {
    for(let i = 0; i < myNums.length; i++) {
        if(myNums[i] !== myNums[i + 1]) {
            myFilterNums.push(myNums[i]);
        }
    }
}

filterRepeatElementFromArray();

console.log(myFilterNums);

// Output is: [1, 2, 3, 4, 5, 6, 7, 8]
