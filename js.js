const pass = document.querySelector('#password')
const p = document.querySelector('.passinfo')
const letters = /[a-z]/i
const numbers = /[0-9]/
const special = /[!@#$%^&*()]/
const minValue = 10

const checkPass = () => {
	if (
		pass.value.length >= minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = 'Twoje hasło jest doskonałe'
		p.style.color = 'lime'
	} else if (pass.value.length >= minValue && pass.value.match(letters) && pass.value.match(numbers)) {
		p.textContent = 'Twoje hasło jest OK'
		p.style.color = 'yellow'
	} else if (pass.value.length >= minValue && pass.value.match(letters) && !pass.value.match(numbers)) {
		p.textContent = 'Twoje hasło musi zawierać cyfry'
		p.style.color = 'orange'
	} else {
		p.textContent = 'Twoje hasło jest za słabe'
		p.style.color = 'red'
	}
}

const check = () => {
	if (pass.value !== '') {
		checkPass()
	} else {
		p.textContent = 'nie podałeś hasła'
		p.style.color = ''
	}
}
pass.addEventListener('keyup', check)
