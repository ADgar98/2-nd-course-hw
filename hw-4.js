// Функции - задание первая часть

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randNum = getRandomInt(1, 100);
  console.log(randNum);

  function Fun(){
    for(let i = 0; i < 10; i++) {
        let userNum = prompt('Введите случайное число от 1 до 100 у тебя 10 попыток!');
        if (randNum > userNum) {
            alert('Увы и ах! Давай снова, ты был близок, твое число меньше, попробуй снова')
         } else if (randNum < userNum) {
            alert('Увы и ах! Давай снова, ты был близок, твое число больше, попробуй снова')
         } else if (isNaN(userNum)) {
            alert('Введи число')
         } else {
            alert('Угадал!')
            break
         }
    }
}

// Функции - задание вторая часть
// задание 1 

let comparison = (a, b) => {
    let result;
    if (a < b) {
        result = b
    } else if (a > b) {
        result = a
    } else{
        result = a || b
    }
    return result;
}

let c = comparison(6, 6);
console.log(c);

// задание 2 

let parity = () => {
    let userNumber = prompt('введи число');
    if (userNumber % 2 === 0) {
        console.log('Число четное')
    } else {
        console.log('Число нечетное')
    }
    return userNumber;
}

let upshot = parity()

// задание 3

let extent = (a) => {
console.log(a ** 2);
return a;
}

let useExtent = extent(3);

// задание 4

let howAge = () => {
    let age = prompt('сколько вам лет');
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age > 0 && age < 12) {
        alert('Привет, друг!')
    } else {
        alert('Добро пожаловать!')
    }
    return age;
}

let userAge = howAge();

// задание 5

let result;
let correctNumbers = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
       console.log('Одно или оба значения не являются числом'); 
    } else {
        result = a * b;
    }
    return result;
}

let correct = correctNumbers('d', 3);

// задание 6

let checkingNumber = () =>{
    let userNumber = prompt('Введите число');
    if (isNaN(userNumber)) {
        console.log('Переданный параметр не является числом');
    } else {
        console.log(`${userNumber} в кубе равняется ${userNumber ** 3}`)
    }
    return userNumber
}
let checkUser = checkingNumber();

// Задание 7

const circle1 = {
    radius: 3,
    getArea (){
        let Area = 2 * 3.14 * this.radius;
        console.log(Area);
    },
    getPerimeter (){
        let Perimeter = 3.14 * (this.radius ** 2);
        console.log(Perimeter);

    }
}
const circle2 = {
    radius: 4,
    getArea (){
        let Area = 2 * 3.14 * this.radius;
        console.log(Area);
    },
    getPerimeter (){
        let Perimeter = 3.14 * (this.radius ** 2);
        console.log(Perimeter);

    }
} 
circle1.getArea();
circle1.getPerimeter();
circle2.getArea();
circle2.getPerimeter();