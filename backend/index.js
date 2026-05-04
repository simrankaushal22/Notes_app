import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors'
import noteRoutes from './routes/note.route.js'
dotenv.config();

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 5000;

//database connection
try {
    mongoose.connect(process.env.MONGO_URL)
    console.log("connected to MangoDB");
    
} catch (error) {
    console.log("error conecting to mongodb",error);
    
}
app.get('/api/test', (req, res) => {
  res.send('Working');
});
//routing middleware
app.use(express.json())
app.use(cors())
app.use("/api/v1/noteapp",noteRoutes)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
