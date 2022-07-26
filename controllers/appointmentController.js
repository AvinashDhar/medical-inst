const Appointment = require('../models/appointmentModel');
const factory = require('./handlerFactory');
exports.createAppointment = factory.createOne(Appointment);

exports.getAppointments = factory.getAll(Appointment);