/*import { Schema,model } from "mongoose";
const student=new Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:true
    },
    class:{
        type:String,
        required:true
    },
    mentorId:{
        type:String,
       
    },
    _id:{
        type:Schema.Types.ObjectId,
        auto: true
    }
})
const studentModel = new model("student",student,"students")
export default studentModel;*/
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
      default: null,
    },
  },
  {
    collection: "Student",
    versionKey: false,
  }
);

const studentModel = mongoose.model("Student", studentSchema);

export default studentModel;