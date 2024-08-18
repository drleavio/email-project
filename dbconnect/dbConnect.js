import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected successfully");
  } catch (error) {
    console.log(error, "error connecting database");
  }
}
