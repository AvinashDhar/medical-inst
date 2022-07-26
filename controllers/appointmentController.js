const Appointment = require('../models/appointmentModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
exports.createAppointment = factory.createOne(Appointment);
exports.getAppointments = factory.getAll(Appointment);
exports.getUserAppointments =   catchAsync(async (req, res, next) => {
    // To allow for nested GET reviews on tour (hack)
    let filter = {};
    if (req.params.userID) filter = { user: req.params.userID };
    console.log(req.params.userID);
    
    const features = new APIFeatures(Appointment.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    // const doc = await features.query.explain();
    const doc = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc
      }
    });
  })