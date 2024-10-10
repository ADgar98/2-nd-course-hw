// дз по массивам

// часть 1

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
        
    let randNum1 = getRandomInt(1, 100);
    let randNum2 = getRandomInt(1, 100);
    console.log(randNum1);
    console.log(randNum2);
    let mathTask = () => {
    const math = ['+', '-', '*', '/'];
    
    
    // Получаем случайный ключ массива
    let rand = Math.floor(Math.random() * math.length);
    console.log(math[rand]);  // Выведет, например: JavaScript [1]
    
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
    while (i < 100) {
    let userAnswer = prompt(`Что получиться? ${randNum1 + oper + randNum2}`);
    if (userAnswer / task == 1) {
        alert(`Правильно ответ ${task}`)
        break;
    } else if (isNaN(userAnswer)){
        alert('Введите число')
    } else {
        alert(`где-то ошибся, ответ ${task}`)
    }
    i++;
    }
    }
    
    // часть 2 
    
    // задание 1
    
    const numCycle = [1, 5, 4, 10, 0, 3];
    
    for (let i = 0; i < numCycle.length; i++) {
        
        if (i = 10) {
            console.log(10);
            break
        }
    }
    
    // задание 2
    
    const numInd = [1, 5, 4, 10, 0, 3];
    console.log(numInd.indexOf(4));
    
    // задание 3
    
    let numJoin = [1, 3, 5, 10, 20];
    numJoin = numJoin.join(' ');
    console.log(numJoin);
    
    // задание 4
    
    let rows = 1;
    let cols = 1;
    let matrix = [];
    for (let i = 0; i < 3; i++) {
      matrix[i] = [];
      for (let j = 0; j < 3; j++) {
        matrix[i][j] = 1;
      }
      
    }
    console.log(matrix)
    
    // задание 5
    
    let numPush = [1, 1, 1];
    
    numPush.push(2);
    numPush.push(2);
    numPush.push(2);
    
    console.log(numPush);
    
    // задание 6
    
    let numSort = [9, 8, 7, 'a', 6, 5];
    numSort = numSort.sort();
    let numfilter = numSort.filter(item => Number(item));
    console.log(numSort);
    console.log(numfilter);
    
    
    // задание 7
    
    let numPrompt = [9, 8, 7, 6, 5];
    let numUser = Number(prompt('введи число'));
    console.log(numUser);
    let numInclude = numPrompt.includes(numUser);
    
    console.log(numPrompt)
    console.log(numInclude)
    
    if (numInclude === true) {
        console.log('угадал')
    } else {
        console.log('не угадал')
    }
    
    // задание 8
    
    let line = 'abcdef';
    
    let lineArray = line.split('');
    
    let reversArray = lineArray.reverse();
    
    let reversline = reversArray.join('');
    
    console.log(reversline);
    
    // задание 9
    
    let numSpread = [[1, 2, 3],[4, 5, 6]];
    let newArr = [];
    for (let i = 0; i < numSpread.length; i++) {
        newArr.push(...numSpread[i])
        
    }
    
    console.log(newArr);
    
    // задание 10
    
    let randArr = [1, 3, 6, 5, 4];
    let sum = []
    for(let i = 0; i < randArr.length; i++){
        if (i === 4) {
            break;
        }
        sum = randArr[i] + randArr[i + 1];
        console.log(sum);
    }
    
    // задание 11
    
    const arr = [1, 2, 3, 4];
    let funArr = () => {
        
        let arrDegree = arr.map(item => (item ** 2));
        console.log(arrDegree);
        return arrDegree;
    }
    
    let squareArr = funArr([1, 2, 3, 4]);
    
    // задание 12
    
    const word = ['den', 'alex', 'max', 'sasha'];
    let wordArr = () => {
        let arrLength = word.map(item => (item.length));
        console.log(arrLength);
        return arrLength;
    }
    
    let wordLebgthArr = wordArr([1, 2, 3, 4]);
    
    // задание 13
    
    const arrIntegers = [1, -2, -3, 4];
    let funArrIntegers = () => {
        
        let arrNegative  = arrIntegers.filter(item => (item < 0));
        console.log(arrNegative);
        return arrNegative;
    }
    
    let negNumArr = funArrIntegers([1, 2, 3, 4]);
    
    // задание 14
    
    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
        
    let randItem = getRandomInt(1, 10);
    let randItem1 = getRandomInt(1, 10);
    let randItem2 = getRandomInt(1, 10);
    let randItem3 = getRandomInt(1, 10);
    let randItem4 = getRandomInt(1, 10);
    let randItem5 = getRandomInt(1, 10);
    let randItem6 = getRandomInt(1, 10);
    let randItem7 = getRandomInt(1, 10);
    let randItem8 = getRandomInt(1, 10);
    let randItem9 = getRandomInt(1, 10);
    
    let randItemArr = [randItem, randItem1, randItem2, randItem3, randItem4, randItem5, randItem6, randItem7, randItem8, randItem9];
    console.log(randItemArr);
    let filtItemArr = randItemArr.filter(item => item % 2 === 0);
    console.log(filtItemArr);
    
    // задание 15
    
    let Item = getRandomInt(1, 10);
    let Item1 = getRandomInt(1, 10);
    let Item2 = getRandomInt(1, 10);
    let Item3 = getRandomInt(1, 10);
    let Item4 = getRandomInt(1, 10);
    let Item5 = getRandomInt(1, 10);
    
    
    
    let randNumArr = [Item, Item1, Item2, Item3, Item4, Item5];
    
    console.log(randNumArr);
    
    let sumRandNumArr = randNumArr.reduce((total, number) => total + number, 0);
    
    let arithmeticMean = sumRandNumArr / randNumArr.length;
    
    console.log(arithmeticMean);