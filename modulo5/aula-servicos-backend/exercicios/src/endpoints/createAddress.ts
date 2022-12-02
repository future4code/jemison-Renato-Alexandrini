import { Request, Response } from "express";
import{Address} from '../type'
import { connection } from '../dataBase/connection';
import {getAddress} from "../services/getAddress";

// Exercício 03
export async function addressAdd(req: Request, res:Response):Promise<void> {
    let errorCode = 500
    let result;
    try{
        const {number, complement, zip_code }:Address = req.body

    if(!zip_code){
        errorCode = 422
            throw new Error('CEP faltando')
    }
    if(!number){
        errorCode = 422
            throw new Error('Número de residência faltando')
    }else{

        const newAddress = await getAddress(zip_code)
        
       await connection.insert({
            zip_code: zip_code,
            street: newAddress.logradouro,
            number: number,
            complement: complement,
            district: newAddress.bairro,
            city: newAddress.localidade,
            state: newAddress.uf
        }).into("Enderecos_exercicios_servicos_backend")
   
        result = await connection("Enderecos_exercicios_servicos_backend")

    }
    res.status(200).send(result)
        
} catch (error: any) {
    res.status(errorCode).send(error.message)
}
}