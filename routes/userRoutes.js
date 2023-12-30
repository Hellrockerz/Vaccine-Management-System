const router=require('express').Router()
const user=require('../controller/userController')
const auth = require('../auth/auth')
// const r = require('../r')
router.post('/login',user.login)
router.post('/signup',user.signup)
// router.post('/signupr',r.signupr)
router.post('/verifyOTP',user.verifyOTP)
router.post('/createSubAdmin', auth.verifyToken, user.createSubAdmin)
router.post('/permissionGranting', auth.verifyToken, user.permissionGranting)
router.post('/twoFaRegister', auth.verifyToken, user.twoFaRegister)
router.post('/createCentre', auth.verifyToken, user.createCentre)
router.put('/updateCentre', auth.verifyToken, user.updateCentre)
router.delete('/deleteSubAdmin', auth.verifyToken, user.deleteSubAdmin)
router.post('/deleteCentre', auth.verifyToken, user.deleteCentre)
router.get('/getUserList', auth.verifyToken, user.getUserList)
router.get('/getCentreList', auth.verifyToken, user.getCentreList)
router.get('/getSlotsList', auth.verifyToken, user.getSlotsList)
router.post('/bookSlot', auth.verifyToken, user.bookSlot)
router.post('/webhook', user.webhook)
router.post('/addSlots', auth.verifyToken, user.addSlots)

module.exports=router