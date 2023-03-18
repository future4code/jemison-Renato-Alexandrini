import { UserBusiness } from '../business/userBusiness';
import { Request, Response } from 'express';
import { AuthenticationTokenDTO } from '../model/DTO/authenticatorDTO';


export class UserController {

  constructor(private userBusiness: UserBusiness) { }

  public getUserProfile = async (req: Request, res: Response): Promise<void> => {

    try {

      const userId = req.params.userId

      const result = await this.userBusiness.getUserById(userId)

      res.status(201).send(result)

    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getAllUsers = async (req: Request, res: Response): Promise<void> => {

    try {

      const token = req.headers.auth as string
      const input = new AuthenticationTokenDTO(token)

      const result = await this.userBusiness.getAllUsers(input)

      res.status(201).send(result)

    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getUserProfiçe = async (req: Request, res: Response): Promise<void> => {

    try {

      const token = req.headers.auth as string
      const input = new AuthenticationTokenDTO(token)

      const result = await this.userBusiness.getAllUsers(input)

      res.status(201).send(result)

    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };


}














