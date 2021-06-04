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
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
    default: Date.now,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  medicalRecords: [
    {
      recordId: {
        type: Schema.Types.ObjectId,
        ref: 'MedicalRecord',
      },
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
