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

//Exercício 04 & Exercício 08

app.post('/productAdd', (req: Request, res: Response) => {

    const { name, price }: Product = req.body

    if (typeof (name) != 'string') {
        res.status(422).send('Nome do produto inválido')

    } else if (typeof (price) != 'number') {
        res.status(422).send('O valor do produto precisa ser um número')

    } else if (price < 0) {
        res.status(422).send('O preço do produto deve ser maior que zero')

    } else if (typeof (name) == 'string' && price >= 0) {
        products.push({
            id: products.length.toString(),
            name: name,
            price: Number(price)
        })
        res.status(200).send(products)

    } else {
        res.status(500).send('Erro inesperado')
    }
})


//Exercício 05
app.get('/products', (req: Request, res: Response) => {
    res.status(400).send(products)
})


//Exercício 06 & Exercício 09
app.put('/products/:idProduct/changePrice', (req: Request, res: Response) => {

    const { price }: Product = req.body
    const chosenProduct = req.params.idProduct
    if (!price) {
        res.status(422).send('Novo valor faltando')

    } else if (typeof (price) != 'number') {
        res.status(422).send('O valor do produto precisa ser um número')

    } else if (price < 0) {
        res.status(422).send('O preço do produto deve ser maior que zero')

    } else if (products.find(element => element.id != chosenProduct.toString())) {
        res.status(404).send('Id de produto não encontrada')

    } else if (typeof (price) == 'number' && products.find(element => element.id == chosenProduct.toString())) {
        products.map((product) => {
            if (product.id === chosenProduct) {
                return product.price = price
            }
        })
        res.status(200).send(products)

    } else {
        res.status(500).send('Erro inesperado')
    }
})


//Exercício 07 & Exercício 10
app.delete('/products/:idProduct/delete', (req: Request, res: Response) => {

    const chosenProduct = req.params.idProduct

    if (products.find(element => element.id !== chosenProduct.toString())) {
        res.status(404).send('Id de produto não encontrada')

    } else if (products.find(element => element.id === chosenProduct.toString())) {
        products.map((product, index) => {
            if (product.id === chosenProduct) {
                return products.splice(index, 1)
            }
        })
        res.status(200).send(products)

    } else {
        res.status(500).send('Erro inesperado')
    }
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

