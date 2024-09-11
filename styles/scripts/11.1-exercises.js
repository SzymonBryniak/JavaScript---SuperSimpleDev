let nums = [10, 20, 30];  //11a
nums[2] = 99

document.querySelector('.test').innerHTML = nums;
console.log(nums.length)


function getLastValue(numsArray){  //11b
  let lastVal = numsArray.size;
  
  console.log(`This was the last value ${numsArray[nums.length - 1]}`);
}

getLastValue(nums);

function arraySwap(array){  //11c
  temp = array[array.length - 1];
  array[-1] = array[0];
  array[0] = temp;
  console.log(array)
}

arraySwap(nums);

for (let i = 0; i <= 10; i += 2) {  //d
  console.log(i);
}

for (let i = 5; i >= 0; i -= 1) {  //e
  console.log(i)
}

let i = 0;  //f
while (i != 10) {
  i += 2;
  console.log(i, i)
}
let ii = 5;  //f
while (ii > 0){
  ii -= 1;
  console.log(ii, ii);
}


iterArray = [1, 2, 3];
console.log(iterArray.length)
for (let i = 0; i <= iterArray.length - 1; i++) { //11g
  iterArray[i] = iterArray[i] * 2
  console.log(iterArray[i]);
}
console.log(iterArray);

function addOne(array){
  for (let i = 0; i <= array.length - 1; i++ ){  //11h
    array[i] = array[i] + 1;
  }
  console.log(array);
}

addOne(iterArray);

function addNum(array, num){
  for (let i = 0; i <= array.length - 1; i++ ){  //11i
    array[i] = array[i] + num;
  }
  console.log(iterArray);
}

addNum(iterArray, 3);

function addArrays(array1, array2) {
  console.log(array1, array2)
  let array3 = []
  for (let i = 0; i <= array1.length - 1; i++ ){  //11j
    array3.push(array1[i] + array2[i]);
  }
  console.log(array3);
}

addArrays(iterArray, iterArray);

nums = [-1, -10, 2, 6, 22];

function countPositive(nums) {  //11k
  console.log(nums.length);
  let positiveCount = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if (nums[i] > 0){
      positiveCount += 1;
    }
    
  }
  console.log(` positive count: ${positiveCount}`);
}

countPositive(nums);  //11l, 11m
nums = [5999, 200, 1 -10, -12, 20, 87];
// nums = [];
function minMax(nums) {
  let min;
  let max;
  for (let i = 0; i < nums.length; i++){

      if (nums === undefined){
          min = null;
          max = null;
          return console.log(console.log(`min: null, max: null`));
      } else if (i === 0) {
          min = nums[i];
          max = nums[i];
      } else if (i > 0) {
          if (nums[i] > max) {
            max = nums[i];
          }
          if (nums[i] < min) {
            min = nums[i];
          }
  }
  }
  console.log(`min: ${min}, max: ${max}`);
}


minMax(nums);