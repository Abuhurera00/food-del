import mongoose from "mongoose";

export const connectDB = async() => {
   await mongoose.connect("mongodb+srv://hurerag24:9872005@cluster0.b26e9.mongodb.net/food-del").then(()=>console.log("DB Connected"))
}