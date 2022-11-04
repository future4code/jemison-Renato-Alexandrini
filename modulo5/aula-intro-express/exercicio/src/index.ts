import express, {Request, Response} from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

//Exercicio 01
app.listen('3003', () => {
    console.log("Server is running in http://localhost:3003");
});

//Exercício 02
type Users = {
    id:number
    name:string
    phone:string
    email:string
    website:string
}

//Exercício 03

const users:Users[] = [
    {
        id:1,
        name:'Renato Alexandrini',
        phone:'(11) 99276-3788',
        email:'re.alexandrini@gmail.com',
        website:'alexandrini.com.br'
    },
    {
        id: 2,
        name:'Gisele Almeida',
        phone:'(11) 99478-2056',
        email:'almeidagi30@gmail.com',
        website:'giselealmeida.com.br'
    },
    {
        id:3 ,
        name:'Leonardo Correa de Lima',
        phone:'(11) 99345-8044',
        email:'lcorrealima@gmail.com',
        website:'correalima.com.br'
    },
    
]

// Exercício 04

app.get('/usuarios',(req:Request, res:Response)=>{

   res.status(200).send(users)

})

//Exercicio 05

type Post ={
    id:number 
    title:string
    body:string
    userId:number
}

//Exercicio 06
//r)Acredito que é melhor criar o array de posts fora do array de usuários, primeiramente para não precisar alterar o tio user já criado e sinto que fica mais organizado quando precisarmos manipular esses arrays

const posts:Post[] =[
    {
        id:1 ,
        title:'Primeiro',
        body:'Primeiro Posta',
        userId:1
    },
    {
        id:2,
        title:'Segundo',
        body:'Segundo Post',
        userId:2
    },
    {
        id:3,
        title:'Terceiro',
        body:'Terceiro Post',
        userId:3
    },
    {
        id:4,
        title:'Quarto',
        body:'Quarto Post',
        userId:1
    },
    {
        id:5,
        title:'Quinto',
        body:'Quinto Post',
        userId:2
    },
    {
        id:6,
        title:'Sexto',
        body:'Sexto Post',
        userId:3
    },
    {
        id:7,
        title:'Sétimo',
        body:'Sétimo Post',
        userId:1
    },
    {
        id:8,
        title:'Oitavo',
        body:'Oitavo Post',
        userId:2
    },
    {
        id:9,
        title:'Nono',
        body:'Nono Post',
        userId:3
    },
]


//Exercício 07


app.get('/posts',(req:Request, res:Response)=>{

    res.status(200).send(posts)
 
 })

 //Exercício 08

 app.get('/posts/usuario',(req:Request, res:Response)=>{
    
    const idUsuario = req.query.userId

    const postsOfUser:Post[] = posts.filter((post)=>{
        return post.userId === Number(idUsuario)
    })

    res.status(200).send(postsOfUser)

})



