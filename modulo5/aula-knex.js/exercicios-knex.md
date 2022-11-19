
# Exercícios da aula de Knex.js

### Exercício 01

#### Vamos começar vendo um pouco do knex. Depois de toda a configuração, podemos usar a variável `connection` para fazer *queries* no banco. 
#### Abaixo, estamos pegando o Actor com o id `001`
```
import { Request, Response } from "express"

// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}


// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

// Assim a chamada funciona fora dos endpoints com await
(async () => {
  console.log(await getActorById("001") )
})()


// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    console.log(await getActorById(id))

    res.end()
  } catch (error) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal
```
#### Perceba algumas coisas importantes nesse código: o uso da template string para acessar a variável que a função recebe; o jeito com que o valor é retornado: result[0][0]. Isso acontece porque uma query feita com o raw devolve exatamente o que o banco MySQL devolveu.

#### Utilize os raws para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.

#### a) Explique como é a resposta que temos quando usamos o raw. 
R) No caso da questão acima, a resposta não aparece no Postman, como ela retorna um console.log, no terminal do VisualStudio, recebemos uma "RowDataPacket" com os dados da linha solcilitada, com a indicação de cor do que é uma string, um número e uma data e como foi utilizado as primeiras ocorrências dos arrays [0][0]vai retornar apenas um resultado

#### b) Faça uma função que busque um ator pelo nome;
R)
```
app.get("/users/:name", async (req: Request, res: Response): Promise<void> => {
    const name = req.params.name;
    let result;
    try {
        if (name) {
            result = await connection.raw(
                `
                SELECT * FROM Actor
                WHERE name LIKE "%${name}%"
               
                `
            )
        }
        res.status(200).send(result[0])
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send("Unexpected error")
    }
})
```

#### Faça uma função que receba um gender retorne a quantidade de itens na tabela 
R)
```
app.get("/actor/countByGender/:gender", async (req: Request, res: Response): Promise<void> => {
    const gender = req.params.gender;
    let result;
    let errorCode = 500
    try {
        if (gender !== "female" && gender !== "male") {
            errorCode = 422
            throw new Error('O Gênero para busca precisa ser "male" ou "female"')
        }else{
            result = await connection.raw(
                `
                SELECT * FROM Actor
                WHERE gender = "${gender}"
               
                `
            )           
        }
        res.status(200).send(result[0])
        console.log(result[0].length)
       
    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }
})
```


### Exercício 02

#### Agora vamos treinar um pouco os query builders. Eles são uma forma mais simples de fazer requisições que já tratam as respostas e as queries usando elementos diretamente do Javascript (objetos e arrays). Abaixo, há uma query que cria um ator:
```
app.put("/actor/updateSalary/:actorId", async (req: Request, res: Response): Promise<void> => {

    const actorId = req.params.actorId;
    const { salary } = req.body
    let errorCode = 500
    let result;

    try {
          if (!salary) {
            errorCode = 422
            throw new Error('Novo salário do Ator Faltando')
        } else {
            result = await connection("Actor").where({ id: actorId })
            console.log(result)
            if (result.length < 1) {
                errorCode = 422
                throw new Error('ID do Ator inesistente')
            } else {
                await connection("Actor")
                    .update({
                        salary: salary,
                    })
                    .where({ id: actorId })
                result = await connection("Actor").where({ id: actorId })
            }

            res.status(200).send(result[0])
        }
    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }
})

```

#### c) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender
