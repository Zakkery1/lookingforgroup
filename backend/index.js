const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postSchema = require("./postSchema");
require("dotenv").config();

let server = process.env.SERVER;
const app = express();
// mongoose.connect(server);
app.use(cors());
app.use(express.json());

// get data from atlas db when the user logs in
app.get("/users", async (req, res) => {
  try {
    await mongoose.connect(server);
    // sort the data that comes back so the most recent post is at the top
    let data = await postSchema.find().sort({ date: -1 });
    console.log(data, "getData");
    res.status(200).json({ data });
  } catch (e) {
    console.log(e, "error");
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await mongoose.disconnect();
  }
});

// Data that is send from the frontend is received, then sent and created in the Atlas DB
app.post("/users/upload", async (req, res) => {
  try {
    await mongoose.connect(server);
    let userData = req.body;
    // console.log(userData, " userdata");
    let data = await postSchema.create(userData);
    res.status(200).json([{ data }]);
    console.log(data);
  } catch (e) {
    console.log(e, "error");
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await mongoose.disconnect();
  }
});

app.listen(3002, () => {
  console.log("Server is listening on port 3002");
});
