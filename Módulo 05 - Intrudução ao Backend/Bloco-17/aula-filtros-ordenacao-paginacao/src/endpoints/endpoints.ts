import express, { Request, Response } from "express"
import cors from 'cors'
import { connection } from '../dataBase/connection'

export async function selectAllUsers(): Promise<any> {
   const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)

   return result[0]
}

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {

   try {
      const users = await selectAllUsers()

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No user found")
      }

      res.status(200).send(users)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}



//Exercício 01

// a) Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por nome. Este nome deve ser enviado por query params.
export async function selectUserByName(name: string): Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE name LIKE "%${name}%";
   `)

   return result[0]
}

export const getUserByName = async (req: Request, res: Response): Promise<void> => {

   try {
      const name = req.query.name as string
      const user = await selectUserByName(name)

      if (!user.length) {
         res.statusCode = 404
         throw new Error("No user found")
      }

      res.status(200).send(user)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

// b) Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem por tipo de user. O tipo de user deve ser passado por path params.
export async function selectUserByType(type: string): Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE type = "${type}";
   `)

   return result[0]
}

export const getUserByType = async (req: Request, res: Response): Promise<void> => {

   try {
      const type = req.params.type
      const user = await selectUserByType(type)

      if (type !== "Teacher" && type !== "Operations" && type !== "CX") {
         res.statusCode = 404
         throw new Error('Type need to be like "Teacher", "Operations" or "CX"')
      }
      if (!user.length) {
         res.statusCode = 404
         throw new Error("No user found")
      }

      res.status(200).send(user)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}


// Exercício 02

// Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que possa receber nome ou tipo de user.
// A ordenação padrão deve ser **crescente**, e caso o usuário não passe nenhum parâmetro, a ordenação deve ser por **email**.

export const orderUser = async (req: Request, res: Response): Promise<void> => {

   try {

      const name = req.query.name
      const type = req.query.type
      let result;

      if (name && !type) {
         result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE name LIKE "%${name}%"
            ORDER BY name ASC;
         `)
      }
      if (type && !name) {
         if (type !== "Teacher" && type !== "Operations" && type !== "CX") {
            res.statusCode = 404
            throw new Error('Type need to be like "Teacher", "Operations" or "CX"')
         } else {
            result = await connection.raw(`
              SELECT * FROM aula48_exercicio
              WHERE type = "${type}"
              ORDER BY type ASC;
          `)
         }
      }
      if (!type && !name) {
         result = await connection.raw(`
         SELECT * FROM aula48_exercicio
         ORDER BY email ASC;
     `)

      }

      res.status(200).send(result[0])

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}


// Exercício 03

//  Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez, e permita que o usuário possa passar a página que deseja ver.
//  O número da página deve ser passado por **query params**.


export async function selectAllUsersPagination(page: number): Promise<any> {
   const result = await connection.raw(`
         SELECT * FROM aula48_exercicio
         LIMIT 5
         OFFSET ${page * 5}
      `)

   return result[0]
}

export const getAllUsersPagination = async (req: Request, res: Response): Promise<void> => {
   try {

      const page = Number(req.query.page)
      const users = await selectAllUsersPagination(page)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No user found")
      }

      res.status(200).send(users)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}


// Exercício 04

//  Crie um último endpoint que possua todas as funcionalidades acima (as duas filtragens, a ordenação e a paginação).
//  Atribua valores padrão para filtragem, ordenação e paginação para que:

//  - Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users;
//  - Caso o usuário não forneça parâmetro de ordenação, o endpoint ordene por **nome** em ordem **decrescente;**
//  - Caso o usuário não forneça número de página, deve começar na página 1


export async function allFunctions(name: string, type: string, order: string, page: number): Promise<any> {

   let result;
   if (!name && !type) {
      if (order === 'ASC') {
         if (!page || page <= 0) {
            result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            LIMIT 5;
            `)
         } else {
            result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            LIMIT 5
            OFFSET ${page * 5};
            `)
         }
      } 
      if(!order || order !== 'ASC') {
         if (!page || page <= 0) {
            result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            ORDER BY name DESC
            LIMIT 5;
            `)
         } else {
            result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            ORDER BY name DESC
            LIMIT 5
            OFFSET ${page * 5};
            `)
         }
      }
   }
   if(name && !type || name && type){
      if (order === 'ASC') {
         if (!page || page <= 0) {
            result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE name LIKE "%${name}%"
            ORDER BY name ASC
            LIMIT 5;
            `)
         } else {
            result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE name LIKE "%${name}%"
            ORDER BY name ASC
            LIMIT 5
            OFFSET ${page * 5};
            `)
         }
      } 
      if(!order || order !== 'ASC') {
         if (!page || page <= 0) {
            result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE name LIKE "%${name}%"
            ORDER BY name DESC
            LIMIT 5;
            `)
         } else {
            result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE name LIKE "%${name}%"
            ORDER BY name DESC
            LIMIT 5
            OFFSET ${page * 5};
            `)
         }

      }
   }
   if(type && !name){
      if (type !== "Teacher" && type !== "Operations" && type !== "CX") {
      throw new Error('Type need to be like "Teacher", "Operations" or "CX"')
      } else {
      if (order === 'ASC') {
         if (!page || page <= 0) {
            result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE type = "${type}"
            ORDER BY name ASC
            LIMIT 5;
            `)
         } else {
            result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE type = "${type}"
            ORDER BY name ASC
            LIMIT 5
            OFFSET ${page * 5};
            `)
         }
      } 
      if(!order || order !== 'ASC') {
         if (!page || page <= 0) {
            result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE type = "${type}"
            ORDER BY name DESC
            LIMIT 5;
            `)
         } else {
            result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE type = "${type}"
            ORDER BY name DESC
            LIMIT 5
            OFFSET ${page * 5};
            `)
         }

      }
   }}
   return result[0]
}

export const getAllFunctions = async (req: Request, res: Response): Promise<void> => {
   try {

      const name = req.query.name as string
      const type = req.query.type as string
      const order = req.query.order as string
      const page = Number(req.query.page)

      const users = await allFunctions(name, type, order, page)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No user found")
      }

      res.status(200).send(users)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}