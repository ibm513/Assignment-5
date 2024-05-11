console.log(`Question No 01`);
console.log(` `);

console.log("Hello, World!");

console.log(` `);
console.log(`Question No 02`);
console.log(` `);

let temperature: number = 10;
if (temperature < 20) {
  console.log(`"It's cold!"`);
}

console.log(` `);
console.log(`Question No 03`);
console.log(` `);

let have_apples = 10;
let giveaway_apples = 3;

console.log(have_apples - giveaway_apples);

console.log(` `);
console.log(`Question No 04`);
console.log(` `);

let firstname = "Ibrahim";
let lastname = "Khalid";
let fullname = console.log(`My full name is ${firstname} ${lastname}`);

console.log(` `);
console.log(`Question No 05`);
console.log(` `);

let x = 5;
let y = 3;

if (x > y) {
  console.log("Yes");
} else {
  console.log("No");
}

console.log(` `);
console.log(`Question No 06`);
console.log(` `);

function calculatearea(radius: number) {
  let area = 3.14 * (radius ** 2);
  return `The area of the circle having radius ${radius} is ${area}`;
}

console.log(calculatearea(5));

console.log(` `);
console.log(`Question No 07`);
console.log(` `);

for (let i = 1; i <= 50; i++)
  if (i % 3 == 0) {
    console.log(`Fizz`);
  } else if (i % 5 == 0) {
    console.log(`Buzz`);
  } else {
    console.log(i);
  }

console.log(` `);
console.log(`Question No 08`);
console.log(` `);

let temperature_1 = [10, 30, 35, 25, 60 , 100];

temperature_1.sort(function(a,b){return a-b});
temperature_1.reverse();
console.log(temperature_1[0]);

console.log(` `);
console.log(`Question No 09`);
console.log(` `);

let age = 18;
if (age < 18) {
  console.log(`Your are a minor`);
} else {
  console.log(`You are an adult`);
}

console.log(` `);
console.log(`Question No 10`);
console.log(` `);

let num_arr = [-1, -4, 10, 54, -11];

function checkpositive(num: number) {
  return num > 0;
}

let post_num = num_arr.filter(checkpositive);

console.log(post_num.length);

console.log(` `);
console.log(`Question No 11`);
console.log(` `);

let words_arr = ["air", "aeroplane", "building", "cars", "average"];

let words_starting_with_a = words_arr.filter(function word(
  word: string
): boolean {
  return word.startsWith("a");
});

console.log(words_starting_with_a);

console.log(` `);
console.log(`Question No 12`);
console.log(` `);

let fruits = ["orange", "banana", "apple", "grapes", "melon", "pineapple"];

let a = fruits[fruits.length - 2];

console.log(`The second to last element of the array named fruits is ${a}`);

console.log(` `);
console.log(`Question No 13`);
console.log(` `);

let arr_1 = [2, 5, 8, 9, 12, 15];

let sq_arr = arr_1.map(sq_of_arr_1);

function sq_of_arr_1(arr_elements: number) {
  return arr_elements ** 2;
}

console.log(sq_arr);

console.log(` `);
console.log(`Question No 14`);
console.log(` `);

let arr_2 = ["cars", "bikes", "fruits", "buildings", "countries"];
let reverse_arr: any[] = [];

function reverse_of_arr() {
  for (let i = arr_2.length - 1; i > -1; i--) reverse_arr.push(arr_2[i]);

  return reverse_arr;
}

console.log(reverse_of_arr());

console.log(` `);
console.log(`Question No 15`);
console.log(` `);

function checkscore(scores: number[], max: any, min: any) {
  let numberexceedmax = scores.filter(checkmax).length;

  function checkmax(max_1: number) {
    return max_1 > max;
  }

  let numberfellbelow = scores.filter(checkmin).length;

  function checkmin(min_1: number) {
    return min_1 < min;
  }

  console.log(
    `The number of times the score exceeded the maximum score: ${numberexceedmax}`
  );
  console.log(
    `The number of times the score fell below the minimum score: ${numberfellbelow}`
  );
}

checkscore([10, 5, 20, 20, 4, 5, 2, 25, 1], 14, 9);


console.log(` `);
console.log(`Question No 16`);
console.log(` `);

let arr_3 = [
  1,
  "Abdullah",
  0,
  23,
  true,
  "",
  false,
  undefined,
  "Ibrahim",
  null,
  56,
  NaN,
];

let x_2 = arr_3.filter(function removeFalsey(rem_falsey_ele) {
  rem_falsey_ele !== undefined &&
    rem_falsey_ele !== 0 &&
    rem_falsey_ele !== false &&
    rem_falsey_ele !== null &&
    rem_falsey_ele !== "" &&
    (rem_falsey_ele !== NaN);

  return rem_falsey_ele;
});

console.log(x_2);

console.log(` `);
console.log(`Question No 17`);
console.log(` `);

let arr_5 = [1, 2, 3];
let arr_6 = [4, 5, 6];

let result_arr = arr_5.concat(arr_6);

console.log(result_arr);




console.log(` `);
console.log(`Question No 18`)
console.log(` `);

let arr_18 = [3,51,18,97,93,26,17,37,81,54,36,16,19]

function odd_even_sum(array_11: any[],input_1: string){
if(input_1 == "odd"){
function check_odd(value: number){
              return value % 2 !== 0
}

let odd_numbers = array_11.filter(check_odd)
              let sum_odd = odd_numbers.reduce(function(a: any,b: any){return a+b},0)
              
              return sum_odd
}
else if (input_1 == "even"){
              function check_even(value_1: number){
              return value_1 % 2 === 0               
              }
let even_numbers = array_11.filter(check_even)
              let sum_even = even_numbers.reduce(function(a: any,b: any){return a+b},0)
           
              return sum_even
}
}
console.log(odd_even_sum(arr_18,"even"))


console.log(` `);
console.log(`Question No 19`)
console.log(` `);

let arr_19 = [45,98,73,19,36,27,49,78,15,34,16,51,58]


function check_element(array_12:any[],input_2:any){
   for(let i=0;i<array_12.length-1;i++){
      if(array_12[i]==input_2) {
      return `Index of ${input_2} is ${array_12.indexOf(input_2)}`
      }

     
   }
    for(let i=0;i<array_12.length-1;i++){
   if (array_12[i] !== input_2){
   return -1
   }
}
}


console.log(check_element(arr_19,49))

console.log(` `);
console.log(`Question No 20`)
console.log(` `);


let arr_20 = [51,18,97,93,26,17,3,37,81,54,36,16,19]

function find_smallest_number(array_13: any){
  array_13.sort(function(a: any,b: any){return a-b})
  return array_13[0]
}

console.log(find_smallest_number(arr_20))




console.log(` `);
console.log(`Question No 21`);
console.log(` `);

let product_1 = 1;

let arr_num = [23, 5, 7, 65, 89, 54];
function calculateProduct() {
  for (let i = 0; i < arr_num.length; i++) {
    product_1 = product_1 * arr_num[i];
  }

  return product_1;
}

console.log(calculateProduct());

console.log(` `);
console.log(`Question No 22`);
console.log(` `);

let arr_7 = ["eggs", "icecream", "melons", "lemons", "burger", "pot", "cat"];

function filterbylength(array_1: any, n: number) {
  for (let i = array_1.length - 1; i > -1; i--)
    if (array_1[i].length < n) {
      array_1.splice(i, 1);
    } else {
    }

  return array_1;
}

console.log(filterbylength(arr_7, 5));

console.log(` `);
console.log(`Question No 23`);
console.log(` `);

let arr_8 = ["apples", "grapes", "oranges", "grapes", "banana", "grapes","cars","bike","cars"];
let duplicates_1: any = [];

function findDuplicates(array_2: any) {
  for (let i = 0; i < array_2.length; i++) {
    for (let j = i + 1; j < array_2.length; j++) {
      if (array_2[i] === array_2[j] && !duplicates_1.includes(array_2[i])) {
        duplicates_1.push(array_2[i]);
      } else {
      }
    }
  }
  return duplicates_1;
}

console.log(findDuplicates(arr_8));

console.log(` `);
console.log(`Question No 24`);
console.log(` `);

let arr_9 = [5, 9, 45, 87, 96, 100, 16];

function incrementAll(array_3: any) {
  array_3.map(func_1);

  function func_1(value: number) {
    return value + 1;
  }

  return array_3.map(func_1);
}

console.log(incrementAll(arr_9));


console.log(` `);
console.log(`Question No 25`);
console.log(` `);



let arr_14 = ['chocolate','biscuit','chips',"chocolate","jam","bread","melon","biscuit","chocolate","jam"]

function countOccurrences(array_9: string | any[],n: string){
  let count = 0
    for(let i  = 0; i < array_9.length; i++){
      if( array_9[i]===n){
          count++
      }
    }

    return `${n} appeared ${count} times`
}

console.log(countOccurrences(arr_14,"bread"))


console.log(` `);
console.log(`Question No 26`);
console.log(` `);


let arr_13 = ["mobile phone","speaker","ear buds","handsfree","memoray card","smart watch"]

let x_8
    
function isSorted(array_8: any[]){
    
   x_8 = array_8.slice(0,array_8.length)
   array_8.sort()
    
    for (let i = 0; i < array_8.length; i++) {
      if(x_8[i] == array_8[i] || x_8[i] == array_8.sort(function(a:number,b:number){return a - b})){
        

        return true
      }
      else{
        return false
      }
    }
    

  }

   
console.log(isSorted([10,11,12,13,14,15,16]))




console.log(` `);
console.log(`Question No 27`);
console.log(` `);

let arr_10 = ["eggs", "bread", "jam", "butter", "chocolate spread", "mayo"];

function arr_to_string(array_4: any) {
  let x = array_4.slice(-1);
  array_4.splice(-1, 1);

  return `${array_4.toString()} and ${x.toString()} `;
}

console.log(arr_to_string(arr_10));




console.log(` `);
console.log(`Question No 28`);
console.log(` `);



let arr_temp = [95,50,89,65,78,49,56]

function far_to_cel(array_5:any){
    array_5.map(conversion)
   
  function conversion(value: number){
       return ((value - 32) * 5)/9
  }

  return array_5.map(conversion)
}


console.log(far_to_cel(arr_temp))


console.log(` `);
console.log(`Question No 29`);
console.log(` `);

let arr_11 = [5,8,63,21,78,65,12]
let sum_1 = 0
let x_3: number
let x_4: any[]

function minMaxAverage(array_6: number[]){
    for (let i = 0;i<array_6.length;i++){
      sum_1 = sum_1 + array_6[i]
      x_3 = sum_1/array_6.length
      x_4 = array_6.sort(function(a: number,b: number){return a-b})

    }


    return {min : x_4[0] , max : x_4[array_6.length-1] , average : x_3}
}


console.log(minMaxAverage(arr_11))


console.log(` `);
console.log(`Question No 30`);
console.log(` `);


let arr_12 = [2,65,99,78,45,21,36,45,14,78]
let x_5
let x_6


function swapElements(array_7: any, index1: any,index2: any){
   let x_7 = array_7.slice(index1,index1+1)
   
    array_7.splice(index1,1,array_7[index2])
    array_7.splice(index2,1,x_7[0])

   return array_7
}

console.log(swapElements(arr_12,3,8))


console.log(` `);
console.log(`Question No 31`);
console.log(` `);


let str_1 = "How are you? Is everything fine?"

let count = 0

function find_match(string_1: string,n: string){
   for(let i = 0; i<string_1.length;i++ ){
    if(string_1.charAt(i) == n )
      count++
   }
   return `${n} appeared ${count} times`
}


console.log(find_match(str_1,"y"))


console.log(` `);
console.log(`Question No 32`);
console.log(` `);

let arr_15 = [
  {task: "Shopping", Completed: true},
  {task: "Car Wash", Completed: false},
  {task:"Groceries",Completed: false},
  {task:"Haircut",Completed: true},
  {task:"Pay Bills", Completed: false},
  {task: "Reparing the mobilephone", Completed: false}
]


arr_15.forEach(function not_completed(array_10){
           if(   array_10.Completed == false){
                         console.log(array_10.task)
           }
})


console.log(` `);
console.log(`Question No 33`);
console.log(` `)


let arr_16 = [2,6,87,56,14,33,67,19,35,81,29]

arr_16.sort(function(a,b){return a-b})

console.log(arr_16
)

console.log(` `);
console.log(`Question No 34`);
console.log(` `)


let arr_17 = ["mobile phone","speaker","ear buds","handsfree","memoray card","smart watch"]

let reverse_arr_1 = []

for (let i = arr_17.length-1; i> -1;i--)
  reverse_arr_1.push(arr_17[i])

console.log(reverse_arr_1)


console.log(` `);
console.log(`Question No 35`);
console.log(` `)



let a_1 = 6
let b_2 = 7



function operation(operand_1: number,operand_2: number,operation_1: string){

              
           if (operation_1 === '+' ){
                         return operand_1 + operand_2
           }   
           else if (operation_1 === '-'){
                         return operand_1 - operand_2
           } 
           else if (operation_1 === '*'){
                       return operand_1 * operand_2
           }
           else if (operation_1 === '/' ) {
                         return operand_1 / operand_2
           }
}

console.log(operation(9,2,"*"))
