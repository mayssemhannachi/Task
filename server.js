import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./config/db.js";

await connectDB(process.env.MONGO_URI)
app.listen(6000, () => {
    console.log("Server en ligne ");
});