const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const upload = require('../middlewares/multer');


router.post('/register', upload, userController.create);
router.get('/user', userController.getAllUsers);
module.exports = router;