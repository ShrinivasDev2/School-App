const express = require("express");
const cors = require("cors");
require("./db/mongoose");

//importing all the routers
const UserRouter = require("./routers/signupAndLoginRouter");
const StudentRouter = require("./routers/studentRouter");
const FeesRouter = require("./routers/feesRouter");
const TeacherRouter = require("./routers/teacherRouter");
const DashboardRouter = require("./routers/dashboardRouter");
const AccountsRouter = require("./routers/accountsRouter");

const app = express();

//CORS Enabling
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(UserRouter);
app.use(StudentRouter);
app.use(FeesRouter);
app.use(TeacherRouter);
app.use(DashboardRouter);
app.use(AccountsRouter);

module.exports = app;
