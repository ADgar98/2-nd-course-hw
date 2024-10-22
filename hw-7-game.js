// игра камень ножницы бумага

function gameRPS() {

    let arr = ['камень', 'ножницы', 'бумага']
    
    let rand = Math.floor(Math.random() * arr.length);
    console.log(arr[rand]);  
    
    let oper = arr[rand];
    
    let userAnswer = prompt('Введите ваш выбор "камень", "ножницы" или "бумага"')
    
    alert(`Ваш выбор ${userAnswer}`)
    alert(`Копьютер выбрал ${oper}`)
    
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