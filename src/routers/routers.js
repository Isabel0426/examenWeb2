const { Router} = require("express");
const router = Router();
const apiRoute = '/api';
const loginController= require('../controllers/loginController')

//course
router.get(apiRoute+'/user',loginController.getAll)
router.get(apiRoute+'/user/:username',loginController.getById)
router.post(apiRoute+'/user',loginController.create)
router.put(apiRoute+'/user/:username',loginController.update)
router.delete(apiRoute+'/user/:username',loginController.delete)

module.exports = router;