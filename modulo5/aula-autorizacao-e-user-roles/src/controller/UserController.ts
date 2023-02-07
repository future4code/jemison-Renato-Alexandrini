import { LoginDataDTO } from './../model/user';
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, UserInputDTO } from "../model/user";
import { AuthenticationTokenDTO } from '../model/authentication';

export class UserController {

      public createUser = async (req: Request, res: Response) => {
        try {
          const { name, nickname, email, role, password } = req.body;
    
          const input: UserInputDTO = {
            name,
            nickname,
            email,
            role,
            password
          };
          const userBusiness = new UserBusiness()
         const token = await userBusiness.createUser(input);
    
          res.status(201).send({ message: "Usuário criado!", token});
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

      public editUser = async (req: Request, res: Response) => {
        try {
          
          const input: EditUserInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            id: req.params.id
          };

          const userBusiness = new UserBusiness()
          await userBusiness.editUser(input);
    
          res.status(201).send({ message: "Usuário alterado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 

      public login = async(req: Request, res: Response) => {
        try {
          const input: LoginDataDTO ={
            email: req.body.email,
            password: req.body.password
          };
          const userBusiness = new UserBusiness()
         const token = await userBusiness.login(input);

         res.status(201).send({ message: "Usuário Logado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }

      public getUserProfile = async(req:Request, res: Response) =>{
        try {

       const input:AuthenticationTokenDTO ={
        token: req.headers.authorization as string
       }
       const userBusiness = new UserBusiness

       const result = await userBusiness.getUserProfile(input.token)
       
          res.status(201).send(result);
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }
 



}
