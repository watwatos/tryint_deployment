import mongoose from "mongoose";

const connectMongoDB=async()=>{
    try{
       await  mongoose.connect(process.env.DB_CONNECTION);
        console.log('connected')
    }catch(error){
        console.log(error)
    }
}
export default connectMongoDB