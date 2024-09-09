const nums = [10, 20, 30];  //11a
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

}

for (let i = 0; i <= 10; i += 2) {  //d
  console.log(i);
}

for (let i = 10; i >= 0; i -= 1) {  //e
  console.log(i)
}

let i = 0;
while (i != 10) {
  i += 2;
  console.log(i, i)
}
// let ii = 5;
// while (i != 0){
//   ii -= 1;
//   console.log(ii, ii);
// }