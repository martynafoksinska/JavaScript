// const animals = ['🐶', '🦁', '🐭', '🐱', '🦊', '🐮']

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i])
// }

// // zadanie stwórz tablicę z kolorami

// const colors = ['🟢', '🔵', '🔴', '🟣', '🟡']

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i])
// }

// // pętla while

// let i = 0

// while (i < 5) {
//     console.log(i)
//     i++
// }

// pętla do ... while

// do {
//     i++
//     console.log(i)
// } while (i < 4)

// pętla for of

// const numbers = [1, 2, 3, 4, 5]

// // for (let i = 0; i < numbers.length; i++) {
// //     console.log(numbers[i] * 2)
// // }

// for (const number of numbers) {
// 	console.log(number * 2)
// }

// zadanie pętla FOR

// const cityNames = ['Gdańsk', 'Warszawa', 'Kraków']

// for (let i = 0; i < cityNames.length; i++) {
// 	console.log('To miasto nazywa się: ' + cityNames[i])
// }

// zadanie z pętli while

// let x = 0

// while (x < 10) {
// 	x = x + 2
// 	console.log(x)
// }

// zadanie z pętli do ... while

// let x = 20

// do {
// 	x = x - 3
// } while (x > 0)
// console.log(x)

// zadanie z pętlą for of

const numbers = [5, 8, 10, 23, 48, 60]

for (const number of numbers) {
	console.log(number / 5)
}

console.log('-----------------')

for (const number of numbers) {
	if (number % 2 == 0) {
		console.log(`%cLiczba ${number} jest parzysta.`, 'background-color: gold;');
	} else {
		console.log(`%cLiczba ${number} nie jest parzysta.`, 'background-color: tomato');
	}
}