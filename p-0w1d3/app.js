const random = Math.round(Math.random() * 2)

const a = 'a'

// if (random === 2) {
//   console.log('БИНГО')
//   if (a === 'a') {
//     console.log('AAA')
//   }
// } else if (random === 1) {
//   console.log('Почти')
// } else {
//   console.log('Не получилось :(')
// }

// var b
// var b var b --> <---

// const b = 'b'
// console.log('снаружи', b)

// if (true) {
//   const b = 'c'
//   console.log('внутри', b)
// }

// console.log('после', b)
console.log(random)

const myObj = {
  name1: 'Петя', age: 11,
  1: 'one', 2: 'two', 0: 'zero'
}

// const myAge = 'age'
// const name111 = 'name1'

// console.log(myObj[myAge])
// console.log(myObj[name111])
// console.log(myObj['name1'])

// console.log(myObj[random])

const x = { a: 1, d: 5 }
const y = x

x.c = 3

y.b = 2
// y ==> {a: 1, c: 3, b: 2}
// x ==> {a: 1, c: 3}

// console.log( x == y )
// console.log( x === y )
// console.log(x)
// console.log(y)

// console.log({} == {})
// индексы =>[0, 1, 2, 3, 4, 5]
const arr = [2, 7, 8, 3, 1, 11]
// console.log('==>', arr.length)

// const str = 'Ку'
// console.log('str', str.length)

// console.log('arr=>', arr[0])
// console.log('arr=>', arr[arr.length - 1])

// Добавляет в конец и возвращает новую длину
// const push = arr.push('Чужак', 'Хищник')
// console.log('push', push)

// Убирает с конца и возарвщает этот элемент
// const pop = arr.pop()
// console.log(arr)
// console.log(pop)

// Убирает сначала и возарвщает этот элемент
// const shift = arr.shift()
// console.log(arr)
// console.log(shift)

// Добавляет вначало и возвращает новую длину
// const unshift = arr.unshift('Только спросить ')
// console.log(arr)
// console.log(unshift)

// Из строки как массив?
// split
const strNew = 'Мама мыла раму'

const arrStr1 = strNew.split('')
const arrStr2 = strNew.split(' ')

const join1 = arrStr1.join('')
const join2 = arrStr2.join(' ')

// console.log('arrStr1', arrStr1)
// console.log('arrStr2', arrStr2)


// console.log('join1', join1)
// console.log('join2', join2)

const upper = strNew.toUpperCase()
console.log('upper', upper)

const lower = strNew.toLowerCase()
console.log('lower', lower)

console.log('strNew', strNew)
