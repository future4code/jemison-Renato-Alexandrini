import express, {Request, Response} from "express"
import cors from 'cors'
import { getAllUsers, getUserByName, getUserByType, orderUser, getAllUsersPagination, getAllFunctions } from "./endpoints/endpoints"


const app = express()
app.use(express.json())
app.use(cors())

app.get('/users', getAllUsers)

//Exercício 01
// a)
app.get('/user/name', getUserByName)
// b)
app.get('/users/:type', getUserByType)

//Exercício 02
app.get('/orderBy', orderUser)

//Exercício 03
app.get('/pagination', getAllUsersPagination)


//Exercício 04
app.get('/allFunctions', getAllFunctions)

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
