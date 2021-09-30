require('dotenv/config')
require('./db')
const express = require('express')
const session = require('express-session')
const app = express()
const server = require('http').createServer(app)
const cors = require('cors')

require('./config')(app)
require('./config/session.config')(app)
require('./config/cors.config')(app)



const allRoutes = require('./routes')
app.use('/api', allRoutes)

require('./error-handling')(app)

module.exports = app
