import express, { Request, Response } from "express"
import cors from 'cors'
import { products } from './data'
import { Product } from "./type"

const app = express()

app.use(express.json())

app.use(cors())

//Exercício 01
app.get('/test', (req: Request, res: Response) => {
    res.status(200).send('Servidor rodando na porta 3003')
})

//Exercício 02
//Arquivo data.ts criado

//Exercício 03
//Arquivo type.ts criado

//Exercício 04

app.post('/productAdd', (req: Request, res: Response) => {

    const { name, price }: Product = req.body

    if (!name || !price) {
        res.status(400).send('Insira as informações do produto que quer adicionar')
    } else {
        products.push({
            id: products.length.toString(),
            name: name,
            price: Number(price)
        })
    }
    res.status(200).send(products)
})


//Exercício 05
app.get('/products', (req: Request, res: Response) => {
    res.status(400).send(products)
})


//Exercício 06
app.put('/products/:idProduct/changePrice', (req: Request, res: Response) => {

    const { price }: Product = req.body
    const chosenProduct = req.params.idProduct
    if (!chosenProduct || !price) {
        res.status(400).send('Parâmetro faltando')
    } else {
        products.map((product) => {
            if (product.id === chosenProduct) {
                return product.price = price
            }
        })
    }
       res.status(200).send(products)
})






app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

