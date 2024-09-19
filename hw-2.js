let password= 'Пароль';
let a = prompt('Введите пароль');


if (a == password) {
    alert('Пароль введен верно')
 } else {
    alert('Пароль введен неправильно')//
 }

let c = 0;

if (c >= 0 && c <= 10) {
    alert('Верно')
 } else {
    alert('Неверно')
 }

c = 10;

if (c >= 0 && c <= 10) {
    alert('Верно')
 } else {
    alert('Неверно')
 }

 c = -3;

if (c >= 0 && c <= 10) {
    alert('Верно')
 } else {
    alert('Неверно')
 }

 c = 2;

if (c >= 0 && c <= 10) {
    alert('Верно')
 } else {
    alert('Неверно')
 }

 a = 30;
 b = 102;

 if (a > 100 || b > 100) {
    alert('Верно')
 } else {
    alert('Неверно')
 }

let f = '2';
let j = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(f) + Number(j));

let monthNumber = prompt('Введите номер месяца')

switch (monthNumber) {
    case '1':
       alert('Январь - Зима');
       break;
    case '2':
       alert('Февраль - Зима');
       break;
    case '3':
        alert('Март - Весна');
        break;
    case '4':
       alert('Апрель - Весна');
       break;
    case '5':
       alert('Май - Весна');
       break;
    case '6':
       alert('Июнь - Лето');
       break;
    case '7':
       alert('Июль - Лето');
       break;
    case '8':
       alert('Агуст - Лето');
       break;
    case '9':
       alert('Сентябрь - Осень');
       break;
    case '10':
       alert('Октябрь - Осень');
       break;
    case '11':
       alert('Ноябрь - Осень');
       break;
    case '12':
       alert('Декабрь - Зима');
       break;                 
    default:
       alert('ввели что-то не то!!!');
 }