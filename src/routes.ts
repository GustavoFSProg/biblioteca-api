import { Router, Request, Response } from 'express'
import urlController from './controllers/urlController'

const routes = Router()

routes.get('/', function (req: Request, res: Response) {
  return res.send({ msg: ` 🌄 Api Running` })
})

routes.get('/all', urlController.getAll)
routes.get('/get-author', urlController.getAuthor)
routes.post('/register', urlController.registerUser)
routes.put('/update/:id', urlController.updateUser)
routes.delete('/delete/:id', urlController.deleteUser)

export default routes