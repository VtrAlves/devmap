const { Router } = require('express')
const devController = require('./controllers/DevController')

const routes = Router()

routes.get('/', (req, res) => {
	return res.json({ message: 'Olá' })
})

routes.get('/devs', devController.index)
routes.post('/devs', devController.store)

module.exports = routes
