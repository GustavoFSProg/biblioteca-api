import { Router, Request, Response } from 'express'
import urlController from './controllers/urlController'

const routes = Router()

routes.get('/', function (req: Request, res: Response) {
  return res.send({ msg: ` 🌄 Api Running` })
})

routes.get('/all', urlController.getAll)
routes.get('/get-author/:name', urlController.getAuthor)
routes.post('/register', urlController.registerUser)
routes.put('/update/:id', urlController.updateUser)
routes.delete('/delete/:id', urlController.deleteUser)
// routes.delete('/delete-all', urlController.deleteAllUser)

export default routes
