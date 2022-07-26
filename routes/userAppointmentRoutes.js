const express = require('express');
const authController = require('../controllers/authController');
const appointmentController = require('../controllers/appointmentController');
const router = express.Router();

router.use(authController.protect);

router.get('/',appointmentController.getAppointments);
router.post('/',appointmentController.createAppointment);

module.exports = router;