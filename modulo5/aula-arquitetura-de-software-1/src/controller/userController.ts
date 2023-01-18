import { UserBusiness } from './../business/userBusiness';
import { Request, Response } from 'express';

export class UserController {

    createUser = async (req: Request, res: Response): Promise<void> => {

        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            };
            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)

            res.status(201).send({ message: 'Usuário criado com sucesso.' });

        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };

    GetUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const userBusiness = new UserBusiness()
            const result = await userBusiness.getAllUsers()

            res.status(201).send(result);

        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };
}
