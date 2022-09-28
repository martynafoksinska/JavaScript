const day = 'sobota'

switch (day) {
	case 'poniedziałek':
		console.log('Dziś jest poniedziałek')
		break
	case 'wtorek':
		console.log('Dziś jest wtorek')
		break
	case 'środa':
		console.log('Dziś jest środa')
		break
	case 'czwartek':
		console.log('Dziś jest czwartek')
		break
	case 'piątek':
		console.log('Dziś jest piątek')
		break
	default:
		console.log('Weekend 🥳')
}

// operator warunkowy

const z = 100

if (z > 20) {
	console.log(`${z} > 20`)
} else {
	console.log(`${z} < 20`)
}

// to samo zapisane inaczej:

const newZ = z > 20 ? `${z} > 20` : `${z} < 20`

console.log(newZ)

// ------------------------------------------------------

const isLoggedIn = true

function loggedIn() {
	console.log('Użytkownik jest zalogowany!')
}

function loggedOut() {
	console.log('Użytkownik nie jest zalogowany!')
}

if (isLoggedIn) {
	loggedIn()
} else {
	loggedOut()
}

// to samo zapisane inaczej:

isLoggedIn ? loggedIn() : loggedOut()

// Zadanie z IF

let x = 50
let y = 30

if (x > y) {
	console.log(`${x} jest większe, niż ${30}`)
}

// Zadanie z IF & else

const color = 'blue'
const newColor = 'green'

if (color === newColor) {
	console.log('Kolory się zgadzają')
} else {
	console.log('Kolory się nie zgadzają')
}

// Zadanie z IF & else if & else

const a = 100
const b = 50

if (a > b) {
	console.log('a > b')
} else if (a === b) {
	console.log('a = b')
} else {
	console.log('a < b')
}

// Zadanie ze SWITCH

const promo = '40%'

switch (promo) {
	case '10%':
		console.log('Dziś mamy 10% zniżki!')
		break
	case '20%':
		console.log('Dziś mamy 20% zniżki!')
		break
	case '30%':
		console.log('Dziś mamy 30% zniżki!')
		break
	default:
		console.log(`Dziś mamy ${promo} zniżki!`)
}

// Zadanie operator warunkowy LICZBA PARZYSTA NIEPARZYSTA

const m = 10

// if (m % 2 == 0 ) {
// 	console.log('Liczba m jest parzysta.')
// } else {
// 	console.log('Liczba m nie jest parzysta.')
// }

const check = m % 2 === 0 ? 'Liczba m jest parzysta.' : 'Liczba m nie jest parzysta.'

console.log(check)

// Zadanie

const randomNumber = 50

if (randomNumber >= 100) {
	console.log('randomNumber > 100'.toUpperCase())
} else if (randomNumber < 100 && randomNumber > 30) {
	console.log('randomNumber jest średniakiem'.toUpperCase())
} else if (randomNumber <= 30) {
	console.log('randomNumber jest mały'.toUpperCase())
}

// Drugi sposób

let text

if (randomNumber >= 100) {
	text = 'randomNumber > 100'
} else if (randomNumber < 100 && randomNumber > 30) {
	text = 'randomNumber jest średniakiem'
} else {
	text = 'randomNumber jest mały'
}

console.log(text.toUpperCase())
