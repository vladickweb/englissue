const server = require('./app')
const PORT = process.env.PORT || 3001

server.listen(3001, () => {
	console.log(`Server listening on port http://localhost:${PORT}`)
})
