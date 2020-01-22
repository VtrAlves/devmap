const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect(
	'mongodb+srv://omnistack:tolima2x0@cluster0-lu7uv.mongodb.net/devmap?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
)

app.use(express.json())
app.use(routes)

app.listen(3333)
