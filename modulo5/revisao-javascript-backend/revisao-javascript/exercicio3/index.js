


const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "re.alexandrini@gmail.com",
		password: "123456"
	}
]

const Login = (newEmail, newPassword) => {

	let validEmailArray = []
	let validPasswordArray = []
	let validator = false

	validEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]{3}?/.test(newEmail);
	validPassword = /.{6,}/.test(newPassword);

	if (validEmail == false) {
		console.log('Preencha corretamente o email')
	}
	else {
		contas.forEach((account) => {
			validEmailArray.push(account.email === newEmail)
		})
	}
	if (validPassword == false) {
		console.log('A senha deve conter no mínimo 6 caracteres')
	}
	else {
		contas.forEach((account) => {
			validPasswordArray.push(account.password === newPassword)
		})
	}

	if (validEmailArray.includes(true) && validEmail === true && validPasswordArray.includes(true) && validPassword === true) {
		return console.log('Login Bem sucedido')
	}
	else if (validEmailArray.includes(false) && validEmail === true && validPasswordArray.includes(false) && validPassword === true) {
		return console.log('email ou senha inválidos')
	}
}

Login('astrodev@labenu.com', 'abc123')
Login('re.alexandrini@gmail.com', '123456')

Login('email@errado.com', '123456')
Login('astrodev@labenu.com','senhaErrada')

Login('emailInvalido','abc123')
Login('re.alexandrini@gmail.com','123')

