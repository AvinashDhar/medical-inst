const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:[true, 'Appointment must belong to a User']
    },
    name:{
        type: String
    },
    email:{
        type:String
    },
    slot:{
        type:String,
        required:true
    },
    notes:{
        type:String
    }

});

const Appointment = mongoose.model('Appointment',appointmentSchema);
module.exports = Appointment;