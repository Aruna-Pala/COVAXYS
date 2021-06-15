const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  medicalRecords: [
    {
      type: Schema.Types.ObjectId,
      ref: 'MedicalRecord',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
