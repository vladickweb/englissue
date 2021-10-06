const router = require('express').Router()
const authRoutes = require('./auth.routes')
const teachersRoutes = require('./teachers.routes')
const userRoutes = require('./user.routes')
const checkoutRoutes = require('./checkout.routes')
const uploadsRoutes = require('./uploads.routes')
const chatRooms = require('./chatRooms.routes')
const chatMessages = require('./chatmessages.routes')
const messagesGroups = require('./messagesGroups')

router.post('/', (req, res) => {
	res.json('All good in here')
	res.send('received')
})

router.use('/auth', authRoutes)
router.use('/teachers', teachersRoutes)
router.use('/user', userRoutes)
router.use('/checkout', checkoutRoutes)
router.use('/uploads', uploadsRoutes)
router.use('/chatrooms', chatRooms)
router.use('/chatmessages', chatMessages)
router.use('/messages', messagesGroups)


module.exports = router
