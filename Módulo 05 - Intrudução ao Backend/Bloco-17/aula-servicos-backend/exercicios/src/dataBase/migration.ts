import { connection } from "./connection"


const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

//Exercício 02
//Na verdade eu não consegui fazer funcionar por aqui, eu acabei criando direto no workshop, mas deixei
//o código aqui pela resolução do exercício 02

export const createTables = () => connection
   .raw(`
      CREATE TABLE IF NOT EXISTS Enderecos_exercicios_servicos_backend (
         id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
         zip_code VARCHAR(255) NOT NULL,
         street VARCHAR(255) NOT NULL,
         number int NOT NULL,
         complement VARCHAR(255),
         district VARCHAR(255),
         city VARCHAR(255),
         state VARCHAR(255)
      );
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

   export const closeConnection = () => { connection.destroy() }

createTables()
     .finally(closeConnection)