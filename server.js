import express from "express";
import {config} from "dotenv";
import dbConnect from "./dbConnect.js";
import authRoutes from "./routes/auth.js";
import refreshTokenRoutes from "./routes/refreshToken.js";
import userRoutes from "./routes/user.js";

const app = express();


config();
dbConnect();


app.use(express.json());
app.use("/api",authRoutes);
app.use("/api/refreshToken",refreshTokenRoutes);
app.use("/api/users",userRoutes)



const port = process.env.PORT || 8080;


/// Example to store data

// const  newSch= new mongoose.Schema({
//     name:String,
//     age:Number,
// });

// const newModel= new mongoose.model("Adna",newSch);
// const data=new newModel({name:"ad",age:23});
// data.save();

/// Example to store data

app.listen(port,()=>{
    console.log(`Listening on port : ${port}...`);
});