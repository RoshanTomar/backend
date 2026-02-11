// sever ko start karna
// database se connect karna

import app from "./src/app.js"
import connectToDb from "./src/config/database.js"
import dotenv from "dotenv";
dotenv.config();

connectToDb()

app.listen(3000,()=>console.log("server is running on port 3000"))


