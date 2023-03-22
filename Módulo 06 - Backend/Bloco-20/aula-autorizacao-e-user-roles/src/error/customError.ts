
export class CustomError extends Error {
    constructor(statusCode: number, message: string) {
        super(message)
    }
}

export class InvalidName extends CustomError {
    constructor() {
        super(400, "Nome inválido")
    }
}

export class InvalidEmail extends CustomError {
    constructor() {
        super(400, "Email inválido ou não preenchido.")
    }
}

export class InvalidPassword extends CustomError {
    constructor() {
        super(400, "Senha Inválida, a senha deve possuir no mínimo 8 caracteres entre números, letras maíusculas e minúsculas.")
    }
}

export class InvalidUser extends CustomError {
    constructor() {
        super(400, "Usuário inesistente email não cadastrado.")
    }
}
export class InvalidUserPassword extends CustomError {
    constructor() {
        super(400, "Password do usuário incorreto.")
    }
}

export class Unauthorized extends CustomError {
    constructor() {
        super(400, "Usuário não autorizado.")
    }
}

export class WrongRole extends CustomError {
    constructor() {
        super(400, 'A role precisa ser "admin", "normal" ou se mater vazia para o padrão.')
    }
}
