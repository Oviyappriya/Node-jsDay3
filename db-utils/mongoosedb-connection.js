import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dbUrl = "localhost:27017";
const dbName = process.env.DB_NAME || "Zenclass";
const dbUser = process.env.DB_USER || "";
const dbPassword = process.env.DB_PASSWORD || "";
const dbCluster = process.env.DB_CLUSTER || "";
//const localUrl = `mongodb://${dbUrl}/${dbName}`;
const cloudUrl = `mongodb+srv://${dbUser}:${dbPassword}@${dbCluster}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

const connectToMongoose = async () => {
  try {
    await mongoose.connect(cloudUrl);
    console.log("mongoose connected Successfully");
  } catch (err) {
    console.log("Error connecting database", err);
    process.exit(1);
  }
};

export default connectToMongoose;
