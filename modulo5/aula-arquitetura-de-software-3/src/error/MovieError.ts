import { CustomError } from "./CustomError"

export class TitleMissing extends CustomError{
    constructor(){
        super(400, "Título do filme faltando")
    }
}

export class DescriptionMissing extends CustomError{
    constructor(){
        super(400, "Descrição do filme faltando")
    }
}

export class DurationMissing extends CustomError{
    constructor(){
        super(400, "Duração do filme faltando")
    }
}

export class ReleaseMissing extends CustomError{
    constructor(){
        super(400, "Ano de lançamento do fime faltando")
    }
}
export class TitleExist extends CustomError{
    constructor(){
        super(400, "Título de filme já cadastrado anteriormente")
    }
}