// Działania arytmetyczne

const add = 2 + 3
console.log(`Wynik dodawania to: ${add}`)

const substract = 10 - 5
console.log(`Wynik odejmowania: ${substract}`)

const multiply = 2 * 5
console.log(`Wynik mnożenia: ${multiply}`)

const divide = 10 - 2
console.log(`Wynik dzielenia: ${divide}`)

const modulo = 13 % 2
console.log(`Wynik modulo: ${modulo}`)

// Tekst w konsoli

const name = 'Martyna'
let age
const food = 'hamburger'

age = 26

console.log(`Cześć, mam na imię ${name}, mam ${age} lat i moje ulubione jedzienie to ${food}.`)

// Zadania

const score = 15 % 2
console.log(score)

if (score % 2 == 0) {
	console.log('Liczba parzysta')
} else {
	console.log('Liczba nieparzysta')
}

let num1 = 8

num1++
num1++

console.log(num1)

let x = 5
const y = 10

console.log((x *= y))
console.log((x /= y))

// Bardzo dobre hasło ma więcej niż 10 znaków
// Dobre hasło ma 5-10 znaków
// Słabe hasło ma mniej niż 5 znaków

const passLength = 15

if (passLength > 10) {
	console.log(`Masz bardzo dobre hasło!`)
} else if (passLength >= 5 && passLength <= 10) {
	console.log(`Masz dobre hasło`)
} else {
	console.log(`Masz słabe hasło...`)
}

// Pętla for

const fruits = ['apple', 'banana', 'orange', 'lemon', 'plum', 123, true, false]

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i])
}

// Funkcje

function addNumbers(x, y) {
	console.log(x + y)
}

addNumbers(5, 8)

function test() {
	console.log('Cześć!')
}

test()

// Zadanie tablice i funkcje

const numbers = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i])
}

function exercise(arg1, arg2, arg3) {
	console.log(arg1 + arg2 * arg3)
}

exercise(1, 2, 3)


if (numbers.length > 5) {
	console.log('TRUE')
} else {
	console.log('FALSE')
}

// Pobieranie elementów

const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('.btn2')

function handleClick () {
	console.log("Kliknięto przycisk nr 1");
}

function addd() {
	console.log(2 + 2);
}

btn1.addEventListener('click', handleClick)
btn2.addEventListener('click', addd)