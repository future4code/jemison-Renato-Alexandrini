import { UserController } from './controller/userController';
import {app} from './app'

const userController = new UserController()

app.post('/user/create', userController.createUser)

app.get('/users', userController.getUsers)

app.delete('/user/:userId/delete', userController.deleteUser)