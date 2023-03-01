import {User} from './interface/interface';

function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}

let user
let value
performPurchase(user, value)