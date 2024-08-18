import mongoose from "mongoose";

const sentSchema = new mongoose.Schema({
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
  date: {
    type: String,
  },
  image: {
    type: String,
  },
});
const recieveSchema = new mongoose.Schema({
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
  date: {
    type: String,
  },
  image: {
    type: String,
  },
});

const emailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must required a name"],
  },
  gender: {
    type: String,
    required: [true, "must required a gender"],
  },
  email: {
    type: String,
    required: [true, "must required a email"],
  },
  password: {
    type: String,
    required: [true, "must required a password"],
  },
  image: {
    type: String,
  },
  sent: [sentSchema],
  recieve: [recieveSchema],
});

const Data =
  mongoose.models.EmailData || mongoose.model("EmailData", emailSchema);
export default Data;
