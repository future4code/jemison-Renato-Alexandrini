import { UserController } from './controller/userController';
import {app} from './app'

const userController = new UserController()

app.post('/user/create', userController.createUser)

app.get('/user', userController.GetUsers)