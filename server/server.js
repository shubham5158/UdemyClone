require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const authRoute = require("./Routes/auth-router.js");
const contactRoute = require("./Routes/contact-router.js");
const connectDb = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Contact Management System",
      version: "1.0.0",
      description:
        "Contact Management System covered Create, Read, Update, and Delete operations using a Node.js API",
    },
    servers: [
      { url: "http://localhost:5000/api" }, //you can change you server url
    ],
  },

  apis: ["./Routes/*.js"], //you can change you swagger path
};

const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOption));

app.use(express.json());

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
