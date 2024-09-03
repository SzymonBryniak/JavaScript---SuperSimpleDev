const name = 'Szymon'
const num1 = 1;
const num2 = 2;
const num3 = 3;
let calculation = '';
let secondSum = '';
let order1 = 5;
let order2 = 3;
let order3 = 9;
let cost = order1 + order2 + order3
console.log(`My name is: ${name}`)
console.log(`cost of food is ${cost}`)
let tax = cost * 0.1;
console.log(`Tax is 10% ${tax}`);
let totalCost = tax + cost;
console.log(`total cost is $${totalCost}`)
function equals(){
  document.querySelector('.calculation_display')
    .innerHTML = `${calculation}`;
    secondSum = eval(calculation)
  document.querySelector('.js-calculation-sum')
  .innerHTML = secondSum;
}
// function updateCalculation(value){

//   calculation += value;
//   localStorage.setItem('calculation', calculation); // 8h
//   console.log(calculation)
  
//   document.querySelector('.calculation_display')
//     .innerHTML = `${calculation}`;
  

  
// };

function updateCalculation(value){
  
  if (value == 'Clear') {
    calculation = '';
    secondSum = '';
    localStorage.setItem('calculation', calculation)
    document.querySelector('.calculation_display')
    .innerHTML = `${calculation}`;
    document.querySelector('.js-calculation-sum')
    .innerHTML = `${calculation}`;
  } else{
  calculation += String(value);
  localStorage.setItem('calculation', calculation); // 8h
  console.log(calculation)
  document.querySelector('.calculation_display')
    .innerHTML = `${calculation}`;
  
  }
  
};