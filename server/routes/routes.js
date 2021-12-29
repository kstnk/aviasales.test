const Router = require('express')
const userController = require('../controllers/controllers')

const router = new Router()

router.post('/user', userController.createUser)
router.get('/user/:id', userController.getUser)
router.put('/user', userController.updateUserEmail)
router.put('/userShared', userController.updateUserShared)

module.exports = router