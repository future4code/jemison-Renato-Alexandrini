import {addressAdd} from './endpoints/createAddress'
import express from "express"
import cors from 'cors'
import { sendEmail } from './endpoints/postSendEmail'


export const app = express()
app.use(express.json())
app.use(cors())

app.post('/address/add',addressAdd)

app.post('/sendEmail/:targetEmail',sendEmail)


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});