// const userModel = require("./userSchema");
const postSchema = require("./postSchema");
<<<<<<< Updated upstream


// const server =
//   "mongodb+srv://ZakkC:Sempron1234!@cluster0.9lhixpz.mongodb.net/LFG";
=======
>>>>>>> Stashed changes

// const server =
//   "mongodb+srv://ZakkC:Sempron1234!@cluster0.9lhixpz.mongodb.net/LFG";
const server = 'mongodb+srv://egguwu:CodeKirby24@cluster0.zwunwic.mongodb.net/LFG'
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
// mongoose.connect(server);
app.use(cors());
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    await mongoose.connect(server);
    // sort the data that comes back so the newest post is at the top
    let data = await postSchema.find().sort({ date: -1 });
    console.log(data, "getData");
    res.status(200).json({ data });
  } catch (e) {
    console.log(e, "error");
    res.status(500).json({ error: "Internal Server Error" });
  }
  // finally {
  //   await mongoose.disconnect();
  // }
});

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
  }
  // finally {
  //   await mongoose.disconnect();
  // }
});

app.listen(3002, () => {
  console.log("Server is listening on port 3002");
});
