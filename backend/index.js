import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctors.js";
import reviewRoute from "./Routes/review.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8001;

const corsOptions = {
  origin: true,
};

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);

// check server is running or not
app.get("/", (req, res) => {
  res.send("Server is Running");
});

// database connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoDB connected");
  } catch (error) {
    console.log("mongoDB failed to connect");
  }
};

// check server
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on this ${port}`);
});
