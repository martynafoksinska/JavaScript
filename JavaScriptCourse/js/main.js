let person = {
	name: 'Martyna',
	age: 26,
}

console.log(person)
console.log(person.age)

function greet(name, lastName) {
	console.log(`Hello ${name} ${lastName}`)
}

greet('Martyna', 'Foksińska')

console.log('-----------------------------')

let points = 101
let type = points > 100 ? 'gold' : 'silver'

if (points > 100) {
	console.log('gold')
} else {
	console.log('silver')
}

console.log('-----------------------------')

let highIncome = false
let goodCreditScore = false
let eligibleForLoan = highIncome || goodCreditScore
console.log('Eligible', eligibleForLoan)

let applicationRefused = !eligibleForLoan

console.log('Application refused ', applicationRefused)

console.log('-----------------------------')

let userColor = undefined
let defaultColor = 'blue'
let currentColor = userColor || defaultColor

console.log(currentColor)

console.log('-----------------------------')

let hour = 8

if (hour < 12 && hour >= 6) {
	console.log('Good morning!')
} else if (hour >= 12 && hour < 18) {
	console.log('Good afternoon!')
} else if (hour >= 18 && hour < 24) {
	console.log('Good evening!')
} else {
	console.log('Silence')
}

console.log('-----------------------------')

for (let i = 1; i <= 5; i++) {
	if (i % 2 !== 0) {
		console.log(i)
	}
}

console.log('-----------------------------')

let number = max(5, 3)
console.log(number)

function max(a, b) {
	// if (a > b) return a
	// else return b
	return a > b ? a : b
}

console.log('-----------------------------')

console.log(isLandscape(300, 600))

function isLandscape(width, height) {
	return width > height
}

console.log('-----------------------------')

// Divisible by 3 = Fizz
// Divisible by 5 = Buzz
// Divisible by both 3 and 5 = FizzBuzz
// Not divisible by 3 or 5 = input
// Not a number = "Not a number"

const output = fizzBuzz(false)
console.log(output)

function fizzBuzz(input) {
	if (typeof input !== 'number') return NaN;
	if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz'
	else if (input % 3 === 0) return 'Fizz'
	else if (input % 5 === 0) return 'Buzz'

	return input
}
