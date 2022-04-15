// 1 Объявление переменных

// Можно вызвать до объявления
console.log('ivan сверху', ivan);
// Устаревший
var ivan;
ivan = 55
var ivan = 99

// Нельзя переобъявлять
let getImage;
getImage = 12
getImage = 122

// 2 Присвоение переменной значения

// Не может остаться без значения
// Нельзя переприсвоить
const costya = 2 + 2 - 1 + getImage;

// console.log('costya', costya);
// console.log('getImage', getImage);
// console.log('ivan', ivan);

// Типы данных 8
// Примитивы: 7
// number, string, undefined, null,
// bigInt, Symbol, boolean (логический)

const num = 77;
const str = 'Моя строка';
const str2 = "<==== Моя строка";
const str3 = `Моя строка ${costya - 100}`;

// Сложный: 1
// Объект object

const str4 = str3 + str2;
// console.log(str4)

// const undef = undefined;
// console.log('undef', undef)

// let nul = null
// nul = 1
// console.log('nul', nul)

// const big = -123n
// console.log('big', big)

// const sym = Symbol(23)
// console.log('sym', sym)

const boo = false
const boo2 = true
// console.log(boo, boo2)
// console.log(boo < boo2)
// console.log((boo2 + boo2) * 3 - null)

const objMy = { name: 'Петя', age: 11, f: false }
console.log(objMy.name, objMy.age, objMy)

const client = { name: 'Дуся' }
client.age = 14

// console.log('client', client)

// Есть индексация
//            [0, 1,  2,  3, 4]
const arrMy = [2, 7, 55, 21, 9]

arrMy.push(87)

// console.log(arrMy)
let strMy = 'Мама мыла раму'
strMy + ' и пол'

// console.log('strMy', strMy)
// console.log('strMy2', strMy2)
// let F = 'Ivan'
// F = 'Petya' 
// console.log(F)

// typeof
// console.log(typeof typeof 22)
// console.log(typeof 'Привет')
// console.log(typeof undefined)
// Ошибка языка
// console.log(typeof null)

// NaN - Not A Number (не число)
// console.log(12 + undefined)
// console.log(typeof NaN)
// console.log(typeof Symbol('ку'))
// console.log(typeof false)
// console.log(typeof {age: 22})
// console.log(typeof 123n)

// Математические операторы
// + - / *  **
// % - это остаток от деления

// console.log(745 % 23)
// console.log(745 % 2)
// console.log(40 % 1.23)
// console.log(5 / 2)

// const number = Math.round(10.1234);
// console.log(number)
