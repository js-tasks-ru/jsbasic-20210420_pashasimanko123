function filterRange(arr, a, b) {
 let newArr = arr.filter(item => item <= b && a <= item);
 return newArr;
}
