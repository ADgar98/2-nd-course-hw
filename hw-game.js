
// игра номер 1 - Угадай число

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

// игра номер 2 - Простая арифметика


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
        
    
    let mathTask = () => {
    const math = ['+', '-', '*', '/'];
  
    let randNum1 = getRandomInt(1, 100);
    let randNum2 = getRandomInt(1, 100);
    console.log(randNum1);
    console.log(randNum2);
    // Получаем случайный ключ массива
    let rand = Math.floor(Math.random() * math.length);
    console.log(math[rand]); 
    
    let oper = math[rand]
    
    let task;
    if (oper === '+') {
        task = randNum1 + randNum2
    } else if(oper === '-'){
        task = randNum1 - randNum2
    } else if(oper === '/'){
        task = randNum1 / randNum2
    } else if(oper === '*'){
        task = randNum1 * randNum2
    }
     else {
      alert('Обнови страницу')
    }
    
    console.log(task);
    
    let i = 0
    while (true) {
    let userAnswer = prompt(`Что получиться? ${randNum1 + oper + randNum2}`);
    if (Number(userAnswer) === Number(task)) {
        alert(`Правильно ответ ${task}`)
        break;
    } else if (isNaN(userAnswer)){
        alert('Введите число')
    } else if (userAnswer == null){
      break;
    } 
    else {
        alert(`где-то ошибся, ответ ${task}`)
    }
    i++;
    }
    }

// игра номер 3 - переверни текст

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


// игра номер 4 - простая викторина 

let userAnswerQuiz = []

const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 
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

function funcQuiz (j) {
    
    for (let i = 0; i < 10; i++) {
        let firstQuestion = Number(prompt(`Ответьте на вопрос ${quiz[j]['question']} варианты ответов: ${quiz[j]['options']}`));
    if (firstQuestion == '') {
        alert('Дайте ответ')
    } else if (firstQuestion === quiz[j]['correctAnswer']){
        userAnswerQuiz.push(1);
        break;
    } else if (firstQuestion > 0 && firstQuestion <=3) {
        userAnswerQuiz.push(0);
        break;
    } else if (firstQuestion > 3){
        alert('Выберите число от 1 до 3')    
    } else {
        alert('Введите номер ответа цифрой')
    }
    i++
    }
    return userAnswerQuiz[j]
}

let gameQuiz = () => {
    let i = 0;
    while (i < 10) {
        let j = i
        let testQuiz = funcQuiz(j);
        if (i === 2) {
            break;
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

// // игра номер 5 - Камень, ножницы, бумага

function gameRPS() {

    let arr = ['камень', 'ножницы', 'бумага']
    
    let rand = Math.floor(Math.random() * arr.length);
    console.log(arr[rand]);  
    
    let oper = arr[rand];
    
    let userAnswer = prompt('Введите ваш выбор "камень", "ножницы" или "бумага"')
    
    alert(`Ваш выбор ${userAnswer}`)
    alert(`Компьютер выбрал ${oper}`)
    
    if (userAnswer.toLowerCase() === oper.toLowerCase()) {
       alert('Ничья');
    } else if (userAnswer.toLowerCase() === 'камень' && oper.toLowerCase() === 'ножницы') {
       alert(`победа ${userAnswer} бьет ${oper}`);
    } else if (userAnswer.toLowerCase() === 'ножницы' && oper.toLowerCase() === 'бумага') {
       alert(`победа ${userAnswer} бьет ${oper}`)
    } else if (userAnswer.toLowerCase() === 'бумага' && oper.toLowerCase() === 'камень') {
       alert(`победа ${userAnswer} бьет ${oper}`)
    } else if (userAnswer.toLowerCase() === 'камень' && oper.toLowerCase() === 'бумага') {
       alert(`проигрыш ${oper} бьет ${userAnswer}`);
    } else if (userAnswer.toLowerCase() === 'ножницы' && oper.toLowerCase() === 'камень') {
       alert(`проигрыш ${oper} бьет ${userAnswer}`);
    } else if (userAnswer.toLowerCase() === 'бумага' && oper.toLowerCase() === 'ножницы') {
       alert(`проигрыш ${oper} бьет ${userAnswer}`);
    } else {
       alert('Введите ваш выбор кирилицей из предложенных вариантов')
    }
    }

// игра номер 6 - Генератор случайных цветов

btnBgColor = document.querySelector('#randomColorsBtn');
bodyBgcolor = document.querySelector('.mini-games');

console.log(btnBgColor)

let randColor = () =>{
let rand = Math.floor((Math.random() * 1000000) + 1);
return rand;
}

function changeBackground(color) {
   
bodyBgcolor.style.backgroundColor = color;
}

btnBgColor.addEventListener('click', function() {
randColor()
let color1 = (`#${randColor()}`)
console.log(color1)
changeBackground(color1)
});
