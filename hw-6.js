// игра переверни текст

let gameRevers = () => {
    for (let i = 0; i < 5; i++) {
        let userText = prompt('введите перевернутый текст');
        let userTextArray = userText.split('');
        let userTextArrayRevers = userTextArray.reverse();
        let userTextJoin = userTextArrayRevers.join('');
        let regexp = /^[а-яА-Я+\s]*$/
        if (regexp.test(userText)) {
            alert(`${userTextJoin}`);
            break;
        } else {
            alert('введите текст только кирилицей')
        }
        
    }
}


// Игра простая викторина 

let gameQuiz = () => {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    let userAnswerQuiz = []
    for (let i = 0; i < 10; i++) {
        let firstQuestion = Number(prompt(`Ответьте на вопрос ${quiz[0]['question']} варианты ответов: ${quiz[0]['options']}`));
    if (firstQuestion == '') {
        alert('Дайте ответ)')
    } else if (firstQuestion === quiz[0]['correctAnswer']){
        userAnswerQuiz[0] = 1;
        break;
    } else if (firstQuestion > 0 && firstQuestion <=3) {
        userAnswerQuiz[0] = 0;
        break;
    } else if (firstQuestion > 3){
        alert('Выберите число от 1 до 3')    
    } else {
        alert('Введите номер ответа цифрой')
    }
    i++
    }
    
    for (let i = 0; i < 10; i++) {
        let secondQuestion = Number(prompt(`Ответьте на вопрос ${quiz[1]['question']} варианты ответов: ${quiz[1]['options']}`));
    if (secondQuestion == '') {
        alert('Дайте ответ)')
    } else if (secondQuestion === quiz[1]['correctAnswer']){
        userAnswerQuiz[1] = 1;
        break;
    } else if (secondQuestion > 0 && secondQuestion <=3) {
        userAnswerQuiz[1] = 0;
        break;
    } else if (secondQuestion > 3){
        alert('Выберите число от 1 до 3')    
    } else {
        alert('Введите номер ответа цифрой')
    }
    i++
    }
    
    for (let i = 0; i < 10; i++) {
        let thirdQuestion = Number(prompt(`Ответьте на вопрос ${quiz[2]['question']} варианты ответов: ${quiz[2]['options']}`));
    if (thirdQuestion == '') {
        alert('Дайте ответ)')
    } else if (thirdQuestion === quiz[2]['correctAnswer']){
        userAnswerQuiz[2] = 1;
        break;
    } else if (thirdQuestion > 0 && thirdQuestion <=3) {
        userAnswerQuiz[2] = 0;
        break;
    } else if (thirdQuestion > 3){
        alert('Выберите число от 1 до 3')    
    } else {
        alert('Введите номер ответа цифрой')
    }
    i++
    }
    
    console.log(userAnswerQuiz);
    
    let quizResult = userAnswerQuiz.reduce((total, number) => total + number, 0);
    
    console.log(quizResult);
    
    if (quizResult === 3) {
        alert('Молодец ты ответил на все правильно')
    } else if (quizResult < 3 || quizResult >= 0){
        alert(`Ты ответил правильно на ${quizResult} из 3`)
    }
}



// домашнее задание 

// // задание 1

let strToLower = 'js';
let strToUpper = strToLower.toUpperCase();
console.log(strToUpper);

// // задание 2

const music = ['русский рок', 'тяжелый рок', 'русский рэп', 'техно'];
const search = 'русский';
const newArrMusic = []
let searchMusic = () => {
    music.forEach((genre) => {
        if (genre.toLowerCase().startsWith(search.toLowerCase())) {
           newArrMusic.push(genre);
        }
        return genre
     });
     
}
let searchMusicTest = searchMusic(1)
console.log(newArrMusic);

// // задание 3

let numberRoundingUp = 32.58884;
console.log(Math.floor(numberRoundingUp));
console.log(Math.ceil(numberRoundingUp));
console.log(Math.round(numberRoundingUp));

// // задание 4

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// // задание 5

function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}
let resultOfRand = getRandomInt(1, 10);
console.log(resultOfRand);


// задание 6


    let numberToEnter = 9;
    let arrForNum = [];
    let i = 0;
    function creatRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    function genArr() {
        while (i < numberToEnter) {
            let numPushArr = creatRandomInt(0, numberToEnter);
            if ((Math.round(numberToEnter / 2)) === i ) {
                break;
            } else if ((numberToEnter / 2) != i) {
                arrForNum.push(numPushArr);
               
            }
            i++
            
        }
    }
    let genArrTest = genArr(1)

    console.log(arrForNum);


// задание 7

let numOne = 20;
let numTwo = 24;

function generatorRangeNumbers(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let testGenArr = generatorRangeNumbers(numOne, numTwo);
console.log(testGenArr)

// задание 8

let myDate = new Date;
console.log(myDate);

// задание 9

let currentDate = new Date;
console.log(currentDate);

let dateFewDays = 73 * 24 * 60 * 60 * 1000; 

let dateLaterDays = +currentDate + dateFewDays;

let requiredDate = new Date(dateLaterDays);
console.log(requiredDate) 

// задание 10

const localDate = new Date();

let funcDate = () => {

const dateOpt = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = localDate.toLocaleDateString('ru-RU', dateOpt);
console.log(`Дата: ${formattedDate} - это ${localDate.toLocaleDateString('ru-RU', {weekday: 'long'})}. Время: ${localDate.toLocaleTimeString('ru-RU')}`);
return formattedDate;

}

let funcDateTest = funcDate(1)