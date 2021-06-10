const mongoose = require('mongoose');
const date = require('date-and-time');

const Schema = mongoose.Schema;

const medicalRecordSchema = new Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  doctor: {
    type: String,
    required: false,
  },
  hospital: {
    type: String,
    required: false,
  },
  nameOfAilment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  prescription: [
    {
      drug: { type: String },
      dosage: { type: String },
      duration: { type: String },
    },
  ],
});

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
