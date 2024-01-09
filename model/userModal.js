import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model('User', UserSchema);

export default User;
