


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

const Login = (email, password) =>{

    validEmail = /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email);
    validPassword = /.{6,}/.test(password);

    if(validEmail != true){
console.log('Preencha corretamente o email')
    }
    if(validPassword != true){
        console.log('Preencha corretamente o email')
            }
if(contas.includes())
} 

Login('', '')