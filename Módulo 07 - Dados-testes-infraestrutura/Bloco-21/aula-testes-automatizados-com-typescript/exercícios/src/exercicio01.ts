
interface User {
	name: string
	balance: number
}

export const Exercicio01 = (user: User, value: number): User | undefined => {
	if(user.balance >= value) {
		return {
			name: user.name,
			balance: user.balance - value		
		}
	}
	return undefined
}