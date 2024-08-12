require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const authRoute = require("./Routes/auth-router.js");
const contactRoute = require("./Routes/contact-router.js");
const connectDb = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");

const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOption));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
