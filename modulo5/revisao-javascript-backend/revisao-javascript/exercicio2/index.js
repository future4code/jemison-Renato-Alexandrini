
const users = [
	{ id: 1, nome: 'Fulano' },
	{ id: 2, nome: 'Ciclano' },
	{ id: 3, nome: 'Beltrano' },
	{ id: 4, nome: 'Fulana' }
]


const UserAdd = (newId, newName) => {

	let validArray = []
	users.forEach((user) => {
		if (user.id === newId) {
			validator = false
			validArray.push(validator)
			return console.log('Erro. Parâmetro inválido ("Id já existe").')

		}
		else if (user.nome == newName) {
			validator = false
			validArray.push(validator)
			return console.log('Erro. Parâmetro inválido ("Nome já existe").')
		}
	})
	if (validArray.includes(false) == false) {
		obj = { id: newId, nome: newName }
		users[users.length] = obj
		return console.log(users)
	}
}
UserAdd(3, 'Renato')
UserAdd(6, 'Fulano')
UserAdd(5, 'Renato')



// Segunda parte

const tabuadaArray = []
const result = 0

const Tabuada = (number, result) => {
	for (let count = 0; count < 11; count++) {
		result = count * number
		tabuadaArray.push(`${number} X ${count} = ${result}`)
	}
	console.log(tabuadaArray)
}

Tabuada(1)
Tabuada(2)
Tabuada(3)
Tabuada(4)
Tabuada(5)
Tabuada(6)
Tabuada(7)
Tabuada(8)
Tabuada(9)
Tabuada(10)