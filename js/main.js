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

const name = 'Martyna'
let age
const food = 'hamburger'

age = 26

console.log(`Cześć, mam na imię ${name}, mam ${age} lat i moje ulubione jedzienie to ${food}.`)

const score = 15

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
