let arr = [60, 52, 30, 40];

let largest = arr[0];
let secondLargest = arr[0];

// Find largest
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

// Find second largest
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
        secondLargest = arr[i];
    }
}

console.log(secondLargest);