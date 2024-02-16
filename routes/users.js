var express = require('express');
var router = express.Router();
const userController = require('../controller/userController')

/* GET users listing. */
router.get('/', userController.findAll );
router.get('/:id', userController.findByID );
router.post('/createUser',userController.createUser)
router.put('/updateUser/:id',userController.updateUser)
router.delete('/deleteUser/:id',userController.deleteUser);
module.exports = router;
