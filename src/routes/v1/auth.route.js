const express = require('express');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const userController = require('../../controllers/auth.controller');

const router = express.Router();

router.post('/user', validate(authValidation.register), userController.register);


module.exports = router;