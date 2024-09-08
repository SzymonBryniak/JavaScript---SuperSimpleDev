const nums = [10, 20, 30];
nums[2] = 99

document.querySelector('.test').innerHTML = nums;
console.log(nums)


function getLastValue(array){
  console.log(array[array.lenght -1]);
}

getLastValue(nums);