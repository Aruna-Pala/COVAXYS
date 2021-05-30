import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, required: true },
  DOB: { type: Date, required: true, default: Date.now },
  createdDate: { type: Date, default: Date.now },
});

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.passwordHash;
  },
});

var User = mongoose.model("User", userSchema);
export default User;
