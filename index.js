"use strict";
import express from "./node_modules/express/index.js";
import mongoose from "./node_modules/mongoose/index.js";
import router from "./router.js";

const PORT = 1234;

const PORT = 1234;
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
