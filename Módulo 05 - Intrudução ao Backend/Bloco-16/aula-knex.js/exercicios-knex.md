# Exercícios da aula de Knex.js

### Exercício 01

#### Vamos começar vendo um pouco do knex. Depois de toda a configuração, podemos usar a variável `connection` para fazer _queries_ no banco.

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

#### c) Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.
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
const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};
```
#### Podemos mandar um objeto javascript diretamente que o knex vai criar a query para nós. Perceba só que temos sempre que colocar como chaves do objeto os nomes das colunas que estão nas tabelas (como fizemos com birth_date).
#### Existem várias funções que podemos encadear: `update()`, `delete()`, `set()`, `select()`, `from()`, `avg()`, `count()` e muito outras. Pesquise na internet se tiver dúvida em qual usar!
#### Utilize os *queries builders* para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.

#### a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão
R)
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

#### b) Uma função que receba um id e delete um ator da tabela
R)
```
app.delete("/actor/delete/:actorId", async (req: Request, res: Response): Promise<void> => {

    const actorId = req.params.actorId;
    let errorCode = 500
    let result;

    try {
        result = await connection("Actor").where({ id: actorId })

        if (result.length < 1) {
            errorCode = 422
            throw new Error('ID do Ator inesistente')
        } else {
            await connection.raw(
                `
                    SET foreign_key_checks = 0;
                    `
            )
            await connection("Actor")
                .delete()
                .where({ id: actorId })
        }

        res.status(200).send('Ator deletado com Sucesso!')
    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }
})
```

#### c) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender
R)Tentei fazer com req.query em vez de req.params, porém não consigo retornar um resultado de forma alguma e utilizando o req.params, mesmo quando não preencho ele nunca me retorna um (!req.params) ele sempre cai no erro de (!= 'female' && !='male')
```
app.get("/actor/salaryAvg/:gender", async (req: Request, res: Response): Promise<void> => {

    const gender = req.params.gender
    let errorCode = 500
    let result;

    try {
        if (gender !== "female" && gender !== "male") {
            errorCode = 422
            throw new Error('O Gênero para busca precisa ser "male" ou "female"')
        } else {
            result = await connection("Actor").avg("salary as average").where({ gender: gender })
        }
        res.status(200).send(result)
    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }
})
```

### Exercício 03

#### Está na hora de começar a criar alguns endpoints. O mais simples de todos talvez seja o de pegar o ator pelo id.  Queremos criar um método GET que receba como path param o id do ator cujas informações queremos pegar. Para isso, devemos:
- Usar o método  `get` do express
- Definir o *path param* com a **chave id: `/actor/:id`.** Dessa forma, poderemos acessar o endpoint assim: `http://localhost:3000/user/id-do-usuario`

#### a) Crie um endpoint com as especificações acima
R)
```
app.get("/actor/filterById/:id", async (req: Request, res: Response): Promise<void> => {

    const actorId = req.params.id
    let errorCode = 500
    let result;

    try {
        result = await connection("Actor").where({ id: actorId })

        if (result.length < 1) {
            errorCode = 422
            throw new Error('ID do Ator inesistente')
        } else {
          res.status(200).send(result)
        }
    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }
})
```
#### b) Crie um endpoint agora com as seguintes especificações:

- Deve ser um GET (`/actor`)
- Receber o gênero como um *query param* (`/actor?gender=`)
- Devolver a quantidade de atores/atrizes desse gênero

R)
```
app.get("/actor", async (req: Request, res: Response): Promise<void> => {

    let gender = req.query.gender as string
    let errorCode = 500
    let result;
    
    try {
        if(!gender){
            errorCode = 422
            throw new Error('Gênero para a busca faltando')
        }       
        if (gender !== "female" && gender !== "male") {
            errorCode = 422
            throw new Error('O Gênero para busca precisa ser "male" ou "female"')
        } else {
            result = await connection("Actor").count().where({gender: gender})
            res.status(200).send(result)
        }
    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }
})
```

### Exercício 04

#### Para finalizar o estudo, você vai criar mais um endpoint. Só que, antes, queremos dar mais um exemplo. Vamos fazer um endpoint para criar um novo ator. Para isso, devemos:
- Definir o método como `POST`
- Criar um path: `/actor`
- Receber os parâmetros pelo body
```
app.post("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.salary
    );

    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
#### Perceba que tivermos que criar uma nova data. Isso acontece porque o JSON só envia para gente um número, um booleano ou uma string. Assim, como a nossa função espera receber um Date, devemos criar uma nova instância dessa classe.
#### Crie um endpoint para cada uma das especificações abaixo:

#### a) Endpoint para atualizar salário com id
R)
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

#### b) Endpoint para deletar ator da tabela
R)
```
app.delete("/actor/:actorId", async (req: Request, res: Response): Promise<void> => {

    const actorId = req.params.actorId;
    let errorCode = 500
    let result;

    try {
        result = await connection("Actor").where({ id: actorId })

        if (result.length < 1) {
            errorCode = 422
            throw new Error('ID do Ator inesistente')
        } else {
            await connection.raw(
                `
                    SET foreign_key_checks = 0;
                    `
            )
            await connection("Actor")
                .delete()
                .where({ id: actorId })
        }

        res.status(200).send('Ator deletado com Sucesso!')
    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }
})
```

### Exercício 05

#### Agora, você vai treinar novamente usando a tabela de Filmes. Só que vai ser bem mais direto agora. Vamos te passar o endpoint, com as especificações e você terá que implementá-lo por completo: a função do banco, a função do express, tudinho!

#### Especificações do Endpoint:
- Deve ser um POST (`/movie`)
- Receber todas as informações pelo body
- Criar o filme na tabela

R)
```
type Movie = {
    id: string,
    title: string,
    synopsis: string,
    releaseDate: Date,
    playingLimitDate: Date
}
app.post("/movie/addMovie", async (req: Request, res: Response): Promise<void> => {

    const { id, title, synopsis,}: Movie = req.body
    const releaseDate =  new Date(req.body.release_date)
    const playingLimitDate = new Date(req.body.playing_limit_date)
    let errorCode = 500
    let result;

    try {
        if (!id) {
            errorCode = 422
            throw new Error('ID do filme faltando')
        }
        if (!title) {
            errorCode = 422
            throw new Error('Título do filme faltando')
        }
        if (!synopsis) {
            errorCode = 422
            throw new Error('Sinopse do filme faltando')
        }
        if (!releaseDate) {
            errorCode = 422
            throw new Error('Data limite de exibição do filme faltando')
        }
        if (!playingLimitDate) {
            errorCode = 422
            throw new Error('Data limite de exibição do filme faltando')
        } else {

            result = await connection.insert({
                id: id,
                title: title,
                synopsis: synopsis,
                release_date: releaseDate,
                playing_limit_date:playingLimitDate
            }).into("Movie")
            
            result = await connection("Movie")
        }

        res.status(200).send(result)

    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }
})
```

### Exercício 06

#### Especificações do Endpoint:
- Deve ser um GET (`/movie/all`)
- Não recebe nada
- Retorna todos os filmes. Ele deve retornar, no máximo, uma lista com 15 itens

R)
```
app.get("/movie/all", async (req: Request, res: Response): Promise<void> => {

    let errorCode = 500
    let result;

    try {

        result = await connection("Movie").limit(15)

        res.status(200).send(result)

    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }
})
```

### Exercício 07

#### Especificações do Endpoint:
- Deve ser um GET (`/movie/search`)
- Deve receber o termo de busca como uma query string (`/movie/search?query=`)
- Faz a busca entre todos os filmes que tenham o termo de busca no nome ou na sinopse. Além disso, a lista deve vir ordenada pela data de lançamento

R)
```
app.get("/movie", async (req: Request, res: Response): Promise<void> => {

    const search = req.query.search as string
    let errorCode = 500
    let result;

    try {
        if(!search){
            errorCode = 422
            throw new Error('Termo para a busca faltando')
        }

        result = await connection("Movie").whereILike('title', `%${search}%`).orWhereILike('synopsis',`%${search}%`)

        res.status(200).send(result)

    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }
})
```