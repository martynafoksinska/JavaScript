const name = 'Martyna'
let age = 26
let favouriteDish = 'rosół'

console.log('Cześć, jestem ' + name + ' mam ' + age + ' lat i moim ulubionym daniem jest ' + favouriteDish + '.')

document.write('Cześć, jestem ' + name + ' mam ' + age + ' lat i moim ulubionym daniem jest ' + favouriteDish + '.')

console.log(`Cześć, jestem ${name} mam ${age} lat i moim ulubionym daniem jest ${favouriteDish}.`)

const dogName = 'Cookie'
let dogAge = 8

console.log(`Cześć, jestem ${name}, a to jest ${dogName} - mój pieseł ❤.`)

console.log(`${dogName} ma już ${dogAge} lat!`)

console.log(dogName + ' ma już ' + dogAge + ' lat!')

const quote = "Jegomość powiedział - 'Kocham schabowe!'"
const quote2 = "I'm verry happy to see you!"

console.log(quote)
console.log(quote2)

const msg = 'to jest testowa wiadomość'
console.log(msg.length)

console.log(msg.toUpperCase())

const newMsg = msg.toUpperCase()

console.log(newMsg)

// zmiana formatu daty

const date = new Date()
console.log(date.toLocaleDateString('pl'))

const userName = 'Martyna'

const newUserName = userName.charAt(0).toUpperCase() + userName.slice(1)

// console.log(userName.slice(1));

console.log(newUserName)

/*
Zadanie ze stringami
        Metody do wykorzystania:
        charAt()
        includes()
        replace()* podchwytliwe 🙂 
        slice()
        split()
        toLowerCase()
        toUpperCase()
    */

const text1 = 'powiększ mnie!'
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
const text4 = 'sprawdź, czy zawieram słowo "czy"'
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
const text7 = 'podziel, ten, string, od, przecinków'

// const newText1 = text1.toUpperCase()
// console.log(newText1);

console.log(text1.toUpperCase())

// const newText2 = text2.toLowerCase()
// console.log(newText2);

console.log(text2.toLowerCase())

// const newText3 = text3.slice(6)
// console.log(newText3);

console.log(text3.slice(6))

// const newText4 = text4.includes('czy')
// console.log(newText4);

console.log(text4.includes('czy'))

// const newText5 = text5.charAt(2)
// console.log(newText5);

console.log(text5.charAt(2))

// const newText6 = text6.replaceAll('pies', 'kot')
// console.log(newText6.replace());

console.log(text6.replaceAll('pies', 'kot'))

// const newText7 = text7.split(',')
// console.log(newText7);

console.log(text7.split(','))

if (' ') {
	console.log('TRUE')
} else {
	console.log('FALSE')
}

const colors = ['red', 'green', 'blue']
console.log(colors)

function test() {
	console.log('Cześć, jestem w funkcji! 😁')
}

test()

const person = {
	name: `Martyna`,
	age: 26,
	favouriteColor: null,
}

console.log(person)

let x = 5
const y = 8

const add = x + y
console.log(add)

const substract = x - y
console.log(substract)

const multiply = x * y
console.log(multiply)

const divide = x / y
console.log(divide)

x++
console.log(`Inkrementacja: ${x}`)
x++
console.log(`Inkrementacja: ${x}`)
x++
console.log(`Inkrementacja: ${x}`)
x--
console.log(`Inkrementacja: ${x}`)
x--
console.log(`Inkrementacja: ${x}`)
x--
console.log(`Inkrementacja: ${x}`)

console.log(10 == '10')
console.log(10 === '10')
console.log('10' === '10')
console.log('----------------')

console.log(10 != '10')
console.log(10 !== '10')
console.log('10' !== '10')

console.log(!true)

if (5 > 0 || 5 > 4) {
	console.log('👍')
} else {
	console.log('👎')
}

if (!(10 == 10)) {
	console.log('👍')
} else {
	console.log('👎')
}

if (5 > 0 && 5 > 6) {
	console.log('👍')
} else {
	console.log('👎')
}

const pass = '5bnm!32xvdfgrfbdrhh'

if (pass.length > 15 && pass.includes("!")) {
	console.log('Masz rewelacyjne hasło')
} else if (pass.length > 10) {
	console.log('Masz dobre hasło')
} else if (pass.length >= 9) {
	console.log('Masz za krótkie hasło')
} else { 
    console.log('Twoje hasło nie spełnia wymagań')
}

console.log('--------------------------')

const color = 'blue'

if (color == 'blue') {
	if (10 > 0) {
		console.log('true true')
	} else {
		console.log('ok')
	}
} else {
	console.log('false')
}
