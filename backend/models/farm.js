import mongoose from 'mongoose';

const farmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Relates to the User model
    required: true,
  },
  timestamps: true
});

const Farm = mongoose.model('Farm', farmSchema);

export default Farm;
