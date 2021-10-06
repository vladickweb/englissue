require('dotenv/config')
require('./db')
const express = require('express')
const session = require('express-session')
const http = require('http')
const app = express()
const server = http.createServer(app)

require('./config')(app)
require('./config/session.config')(app)
require('./config/cors.config')(app)
const cors = require('cors')
const whitelist = [process.env.ORIGIN, process.env.ORIGIN_ONLINE];
const corsOptions = {
    origin: (origin, cb) => {
        const isOriginWhiteListed = whitelist.includes(origin);
        cb(null, isOriginWhiteListed);
    },
 
    credentials: true
}
app.use(cors(corsOptions));



const io = require('socket.io')(server, {cors: corsOptions})

io.on('connection', socket => {
	socket.emit('me', socket.id)
	
	socket.on('disconnect', () => {
		socket.broadcast.emit('callEnded')
	})

	socket.on('callUser', data => {
		io.to(data.userToCall).emit('callUser', { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on('answerCall', data => {
		io.to(data.to).emit('callAccepted', data.signal)
	})
})

const allRoutes = require('./routes')

app.use('/api', allRoutes)
app.use((req, res) => res.sendFile(__dirname + '/public/index.html'))

module.exports = server
