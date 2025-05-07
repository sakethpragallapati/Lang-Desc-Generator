import mongoose from "mongoose";

const dbConnection = async () => {
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Database is connected Successfully!!");
    }).catch((error)=> console.log(`Something went wrong please try again.. ${error}`));
}

export default dbConnection