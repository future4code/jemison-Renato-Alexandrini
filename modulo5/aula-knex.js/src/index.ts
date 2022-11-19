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

// Exercício 02 - B)



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});