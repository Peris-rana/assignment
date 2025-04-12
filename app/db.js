import mongoose from "mongoose";
// database connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongodb database");
    studentData();
    console.log("Data added");
  } catch (error) {
    console.log("Error in mongodb");
  }
};
export default connectDB;

// function to insert student data
const studentData = async () => {
  try {
    const studentModel = mongoose.model(
      "student",
      new mongoose.Schema({ name: String })
    );
    const studentData = new studentModel({ name: "Peris" });
    await studentData.save();
    console.log("Student added");
  } catch (error) {
    console.log("Error inserting student data:", error);
  }
};
