const arrowIcon = document.querySelector('.fas')
const btn = document.querySelector('.arrow')
const img = document.querySelector('.item')

function showImage() {
	img.classList.toggle('show')

	if (img.classList.contains('show')) {
		arrowIcon.style.transform = 'rotate(180deg)'
		console.log('OK')
	} else {
		arrowIcon.style.transform = 'rotate(0)'
		console.log('NIE OK')
	}
}

btn.addEventListener('click', showImage)
