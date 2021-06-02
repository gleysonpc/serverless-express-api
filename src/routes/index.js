import { Router } from 'express'
import usersController from '../controllers/usersController'

const routes = Router()

routes.get('/users', usersController.index)
routes.get('/users/:id', usersController.show)
routes.post('/users', usersController.store)
routes.put('/users/:id', usersController.update)
routes.delete('/users/:id', usersController.destroy)

export default routes