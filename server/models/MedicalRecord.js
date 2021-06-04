const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicalRecordSchema = new Schema({});

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
