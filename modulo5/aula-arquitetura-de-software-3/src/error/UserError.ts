import {CustomError} from './CustomError'

export class InvalidData extends CustomError{
    constructor(){
        super(400, "Dados Inválidos")
    }
}