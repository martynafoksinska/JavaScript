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

const output = fizzBuzz(15)
console.log(output)

function fizzBuzz(input) {
	if (typeof input !== 'number') return NaN
	if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz'
	else if (input % 3 === 0) return 'Fizz'
	else if (input % 5 === 0) return 'Buzz'

	return input
}

console.log('-----------------------------')

// Speed limit = 70
// 5 --> 1 point
// math.floor(1.3)
// 12 points --> suspended

checkSpeed(129)

function checkSpeed(speed) {
	const speedLimit = 70
	const kmPerPoint = 5

	if (speed < speedLimit + kmPerPoint) console.log('ok')
	else {
		const points = Math.floor((speed - speedLimit) / kmPerPoint)
		if (points >= 12) console.log('License suspended')
		else console.log('Points', points)
	}
}

console.log('-----------------------------')

// EVEN ODD NUMBERS

showNumbers(10)

function showNumbers(limit) {
	for (let i = 0; i <= limit; i++) {
		if (i % 2 !== 0) {
			console.log(`${i} "ODD"`)
		} else {
			console.log(`${i} "EVEN"`)
		}
	}
}

console.log('-----------------------------')

const array = [0, null, undefined, '', 1, 2, 3]

console.log(countTruthy(array))

function countTruthy(array) {
	let count = 0
	for (let value of array) if (value) count++
	return count
}

console.log('-----------------------------')

const movie = {
	title: 'a',
	releaseYear: 2018,
	rating: 4.5,
	director: 'b',
}

showProperties(movie)

function showProperties(obj) {
	for (let key in obj) {
		if (typeof obj[key] === 'string') console.log(key, obj[key])
	}
}

console.log('-----------------------------')

console.log(sum(5))

function sum(limit2) {
	let sum = 0

	for (let i = 0; i <= limit2; i++) {
		if (i % 3 === 0) {
			sum += i
		}
		if (i % 5 === 0) {
			sum += i
		}
	}

	return sum
}

console.log('-----------------------------')


// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [80, 80, 55];

function calculateGrade(marks)  {

	   const avg = calculateAvg(marks);

if (avg < 60) return 'E';
if (avg < 70) return 'D';
if (avg < 80) return 'C';
if (avg < 90) return 'B';
return 'A';
 
}
 
function calculateAvg(array){
	let sum = 0;
	for (let value of array)
	sum += value;
	return sum/array.length;
 
}

console.log(calculateGrade(marks));

console.log('-----------------------------')

showStars(9);

function showStars(rows) {
    let row = "";
    for (let i = 1; i <= rows; i++) {
        row += "*"
        console.log(row);
    }
    return row;
}