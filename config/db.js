import mongoose from "mongoose";
export async function connectDB(uri){
    await mongoose.connect(uri);
    console.log("connecté à MongoDB");
}