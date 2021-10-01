require('dotenv/config')
require('./db')
const express = require('express')
const session = require('express-session')
const http = require('http')
const app = express()
const server = http.createServer(app)
const socket = require('socket.io')

require('./config')(app)
require('./config/session.config')(app)
require('./config/cors.config')(app)

const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: [ "GET", "POST" ]
	}
})

io.on("connection", (socket) => {
	socket.emit("me", socket.id)

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	})

	socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})
})

server.listen(5000, () => console.log("server is running on port 5000"))


const allRoutes = require('./routes')
app.use('/api', allRoutes)

require('./error-handling')(app)

module.exports = app
