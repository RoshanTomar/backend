import { connect } from "mongoose";

function connectToDb(){
    connect(process.env.MONGO_URI)
    .then(()=>console.log("connected to DB"))
    .catch(err=>console.log(err))
}

export default connectToDb;
