// циклы
// задание 1!!!

let word = 0
while (word < 2) { console.log('Привет');
   word++
}

// задание 2!!!

for (let num = 1; num <= 5; num++) {
   console.log(num);
   
} 

// задание 3!!!  

for (let numBig = 7; numBig <= 22; numBig++) {
   console.log(numBig);
   
}   

// задание 4!!!

const obj = {
   "Коля" : '200',
   "Вася" : '300',
   "Петя" : '400',
}
for (let key in obj) {
   console.log(`${key}: ${obj[key]}`);
}
 
// задание 5!!!

let n = function (num) {
   let chet = 0
   let nechet = 0
   for (let i = 0; i <= 10; i++ ) {
      if(num / 2 >= 50) num = num / 2, chet++, nechet = num;
      else break
   }
   return[chet, nechet];
}
let a = n(1000)

console.log(a)

// задание 6!!!

let friday = 4
for (let i = 0; i < 31; i++) {
   if(friday == i) alert(`сегодня пятница, ${friday}, пора готовить отчет`), friday = friday + 7
}
