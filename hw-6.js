// домашнее задание 

// // задание 1

// let strToLower = 'js';
// let strToUpper = strToLower.toUpperCase();
// console.log(strToUpper);

// // // задание 2

// const music = ['русский рок', 'тяжелый рок', 'русский рэп', 'техно'];
// const search = 'русский';
// const newArrMusic = []
// let searchMusic = () => {
//     music.forEach((genre) => {
//         if (genre.toLowerCase().startsWith(search.toLowerCase())) {
//            newArrMusic.push(genre);
//         }
//         return genre
//      });
     
// }
// let searchMusicTest = searchMusic(1)
// console.log(newArrMusic);

// // // задание 3

// let numberRoundingUp = 32.58884;
// console.log(Math.floor(numberRoundingUp));
// console.log(Math.ceil(numberRoundingUp));
// console.log(Math.round(numberRoundingUp));

// // // задание 4

// console.log(Math.max(52, 53, 49, 77, 21, 32));
// console.log(Math.min(52, 53, 49, 77, 21, 32));

// // // задание 5

// function getRandomInt(min, max) {
// min = Math.ceil(min);
// max = Math.floor(max);
// return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let resultOfRand = getRandomInt(1, 10);
// console.log(resultOfRand);


// // задание 6


//     let numberToEnter = 9;
//     let arrForNum = [];
//     let i = 0;
//     function genArr() {
//         while (i < numberToEnter) {
//             let numPushArr = getRandomInt(0, numberToEnter);
//             if ((Math.round(numberToEnter / 2)) === i ) {
//                 break;
//             } else if ((numberToEnter / 2) != i) {
//                 arrForNum.push(numPushArr);
//             }
//             i++
            
//         }
//     }
//     let genArrTest = genArr(1)

//     console.log(arrForNum);


// // задание 7

// let numOne = 20;
// let numTwo = 24;

// let testGenArr = getRandomInt(numOne, numTwo);
// console.log(testGenArr)

// // задание 8

// let myDate = new Date;
// console.log(myDate);

// // задание 9

// let currentDate = new Date;
// console.log(currentDate);

// currentDate.setDate(currentDate.getDate() + 73)
// console.log(currentDate);

// // let dateFewDays = 73 * 24 * 60 * 60 * 1000; 

// // let dateLaterDays = +currentDate + dateFewDays;

// // let requiredDate = new Date(dateLaterDays);
// // console.log(requiredDate) 

// // задание 10

// const localDate = new Date();

// let funcDate = () => {

// const dateOpt = { year: 'numeric', month: 'long', day: 'numeric' };
// const formattedDate = localDate.toLocaleDateString('ru-RU', dateOpt);
// console.log(`Дата: ${formattedDate} - это ${localDate.toLocaleDateString('ru-RU', {weekday: 'long'})}. Время: ${localDate.toLocaleTimeString('ru-RU')}`);
// return formattedDate;

// }

// let funcDateTest = funcDate(1)