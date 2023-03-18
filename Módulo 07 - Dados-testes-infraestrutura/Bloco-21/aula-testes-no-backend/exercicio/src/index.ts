import { UserDatabase } from './data/userDatabase';
import { UserBusiness } from './business/userBusiness';
import { UserController } from './controller/userController';
import {app} from './app';
import { Authenticator } from './services/authenticator';

const authenticator = new Authenticator()
const userDatabase = new UserDatabase()
const userBusiness = new UserBusiness(userDatabase, authenticator)
const userController = new UserController(userBusiness)

app.get('/user/profile/:userId',(req, res)=> userController.getUserProfile)