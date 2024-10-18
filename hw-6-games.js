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


// простая викторина 

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
        alert('Дайте ответ)')
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