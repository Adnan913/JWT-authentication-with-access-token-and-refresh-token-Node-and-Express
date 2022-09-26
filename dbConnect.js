import mongoose from "mongoose";

const dbConnect =()=>{
    const connectionParams={useNewUrlParser:true};
    mongoose.connect(process.env.DB,connectionParams);


    mongoose.connection.on("connected",()=>{
        console.log("Connected to the database successfully!");
    });

    mongoose.connection.on("error",(error)=>{
        console.log("Error while connecting to the database : "+error);
    });

    mongoose.connection.on("disconnected",()=>{
        console.log("Mongo DB connection disconnected");
    });
};

export default dbConnect;
