import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import foodRouter from "./routes/foodRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
configDotenv();

mongoose.connect(
  "mongodb+srv://Hustle999:Tujin%40247@turshilt.5ucoe.mongodb.net/food-delivery"
);

const server = express();
const PORT = 8000;
server.use(cors());
server.use(bodyParser.json());

// server.use("/api", userRouter);
server.use("/api", foodRouter);
server.use("/api", categoryRouter);
// server.use("api", orderRouter);
// server.use("/api", categoryRouter);

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} deer backend ajillaj bn`);
});

// server.get("/get-products", async (req, res) => {
//   const db = await connectDB();

//   let collection = db.collection("product");
//   let results = await collection.find().toArray();

//   res.json({
//     success: true,
//     data: results,
//   });
// });

// server.post("/create-products", async (req, res) => {
//   const db = await connectDB();

//   let collection = db.collection("product");
//   let results = await collection.insertOne({
//     name: "chihevch",
//     owner: "tugo",
//     price: "1000",
//   });

//   res.json({
//     success: true,
//     data: results,
//   });
// });

// server.put("/update-products", async (req, res) => {
//   const db = await connectDB();

//   let collection = db.collection("product");
//   let results = await collection.findOneAndUpdate(
//     {
//       _id: new ObjectId("6740021fa2cf5c9a2fc8324a"),
//     },
//     {
//       $set: { price: "8800", date: new Date() },
//     }
//   );

//   res.json({
//     success: true,
//     data: results,
//   });
// });

// server.delete("/delete-products", async (req, res) => {
//   const db = await connectDB();

//   let collection = db.collection("product");
//   let results = await collection.deleteOne({
//     _id: new ObjectId("6740021fa2cf5c9a2fc8324a"),
//   });

//   res.json({
//     success: true,
//     data: results,
//   });
// });

// server.get("/", (req, res) => {
//   res.json(["Tugo"]);
// });
