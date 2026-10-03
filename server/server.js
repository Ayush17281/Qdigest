const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes");
const connectDB = require("./db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Qdigest server is running");
});

app.use("/api", routes);

app.listen(5000, () => {
   console.log(`Server running on port ${process.env.PORT}`);
});