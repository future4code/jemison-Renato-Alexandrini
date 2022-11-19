import express, { Request, Response } from "express"
import cors from 'cors'
import { connection } from './dataBase/connection'
import dotenv from "dotenv";


dotenv.config();
const app = express()
app.use(express.json())
app.use(cors())

// Exercício 01 - B)
app.get("/actor/:name", async (req: Request, res: Response): Promise<void> => {
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


// Exercício 01 - C)
app.get("/actor/countByGender/:gender", async (req: Request, res: Response): Promise<void> => {
    const gender = req.params.gender;
    let result;
    let errorCode = 500
    try {
        if (gender !== "female" && gender !== "male") {
            errorCode = 422
            throw new Error('O Gênero para busca precisa ser "male" ou "female"')
        } else {
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

// Exercício 02 - A)
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

// Exercício 02 - B)
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

// Exercício 02 - C)
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

// Exercício 03 - A)
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


// Exercício 03 - B)
app.get("/actor", async (req: Request, res: Response): Promise<void> => {

    let gender = req.query.gender as string
    let errorCode = 500
    let result;

    try {
        if (!gender) {
            errorCode = 422
            throw new Error('Gênero para a busca faltando')
        }
        if (gender !== "female" && gender !== "male") {
            errorCode = 422
            throw new Error('O Gênero para busca precisa ser "male" ou "female"')
        } else {
            result = await connection("Actor").count().where({ gender: gender })
            res.status(200).send(result)
        }
    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }
})

//Exercícios 4-A e 4-B foram feitos acima

// Exercício 05)
type Movie = {
    id: string,
    title: string,
    synopsis: string,
    releaseDate: Date,
    playingLimitDate: Date
}
app.post("/movie/addMovie", async (req: Request, res: Response): Promise<void> => {

    const { id, title, synopsis, }: Movie = req.body
    const releaseDate = new Date(req.body.release_date)
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
                playing_limit_date: playingLimitDate
            }).into("Movie")

            result = await connection("Movie")
        }

        res.status(200).send(result)

    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }
})

// Exercício 06)
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

// Exercício 07)
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



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});