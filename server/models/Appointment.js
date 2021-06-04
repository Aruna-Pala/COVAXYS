const mongoose = require('mongoose');
const date = require('date-and-time');

const Schema = mongoose.Schema;
const types = mongoose.Types;

const appointmentSchema = new Schema({
  patient: {
    type: types.ObjectId,
    ref: 'User',
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  vaccinationCenter: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  vaccineReceived: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    requried: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
