const axios = require('axios')
const Dev = require('../models/Dev')

module.exports = {
	async store(req, res) {
		console.log(req.body)
		const { github_username, techs, latitude, longitude } = req.body

		let dev = await Dev.findOne({ github_username })

		if (!devCreated) {
			const response = await axios.get(
				`https://api.github.com/users/${github_username}`,
			)

			const { name = login, avatar_url, bio } = response.data

			const techsArray = techs.split(',').map(tech => tech.trim())

			const location = {
				type: 'Point',
				coordinates: [longitude, latitude],
			}

			const dev = await Dev.create({
				github_username,
				name,
				avatar_url,
				bio,
				techs: techsArray,
				location,
			})
		}

		return res.json(dev)
	},

	async index(req, res) {
		const devs = await Dev.find()

		return response.json(devs)
	},
}
