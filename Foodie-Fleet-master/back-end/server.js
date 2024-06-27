import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";


// app config
const app = express();
const PORT = process.env.PORT || 4000;
const URL = "mongodb+srv://debashishbhagawatiiit2026:myprojects@cluster0.vhqz3n2.mongodb.net/Food-delivery-app"
// mongodb+srv://debashishbhagawatiiit2026:myprojects@cluster0.vhqz3n2.mongodb.net/?

// middlewares
app.use(express.json());
app.use(cors());

// db connection
connectDB(URL);


// api endpoints
app.use("/api/food", foodRouter)
app.use('/images', express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter);
app.use("/api/order", orderRouter);


// api routes
app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});


// listen
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});