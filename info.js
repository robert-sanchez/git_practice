const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of numArr) {
    console.log(num);
}

const randomNumArr = [45, 37, 23, 99, 65, 38, 56, 19, 76, 33, 90, 48, 72, 43];

const numOver67 = randomNumArr.filter(num => num > 67);
console.log(numOver67);