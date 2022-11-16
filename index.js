"use strict";
import mongoose from 'mongoose';

import express from 'express'

import router from './router.js';

const PORT = 443;
const app = express();
const DB_URL = `mongodb+srv://admin:admin@cluster0.gwfkspe.mongodb.net/?retryWrites=true&w=majority`;
app.use(express.json());
app.use("/api", router);

app.get("/", async (req, res) => {
  console.log(req.body);
  res.status(200).json("Server started");
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () =>
      console.log("server start on http://localhost:" + PORT)
    );
  } catch (e) {
    console.log(e);
  }
}
startApp();
