/*import { Schema,model } from "mongoose";
const mentor=new Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    studentId:{
        type:String,
        
    }
})
const mentorModel = new model("mentor",mentor,"mentors")
export default mentorModel*/
import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  },
  {
    collection: "Mentor",
    versionKey: false,
  }
);
const mentorModel = mongoose.model("Mentor", mentorSchema);

export default mentorModel;