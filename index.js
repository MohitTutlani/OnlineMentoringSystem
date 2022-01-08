// Including the important modules or files
const express = require("express");
const connectDB = require("./config/db");
const session = require("express-session");
const morgan = require("morgan");
require("dotenv").config();
// const fileRoutes = require("./routes/api/file-upload-route");
// var fileUpload = require("express-fileupload");

const path = require("path");
const app = express();

// app.use(fileUpload());
app.use(require("cors")());
connectDB();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// var template = require("./routes/api/template");
// app.get("/template", template.get);

var upload = require("./routes/api/upload.js");
app.post("/", upload.post);

//Telling the server that the data is about to come
app.use(express.json({ extended: false }));

//Creating the PORT variable
const PORT = process.env.PORT || 5000;

//logs
app.use(morgan("tiny"));

//session
app.use(
  session({
    secret: "incognito",
    resave: false,
    saveUninitialized: false,
  })
);

//Multer
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(express.static("public"));

//including the routes || api
//authentication route/api  Login
app.use("/api/auth", require("./routes/api/auth"));
//Signup route/api
app.use("/api/user", require("./routes/api/user"));

//Student route/api
app.use("/api/student", require("./routes/api/student"));

//Doubts route/api
app.use("/api/StudentDoubt", require("./routes/api/StudentDoubt"));

//Admin route/api
app.use("/api/admin", require("./routes/api/admin"));

//Mentor alert templates route/api
app.use("/api/alerts", require("./routes/api/alerts"));

//Mentor route route/api
app.use("/api/mentor", require("./routes/api/mentor"));

//cvs.js file route/api
// app.use("/api/csv", require("./routes/api/csv"));
//Listening to the defined port

//@upload route/api
app.use("/api/documents", require("./routes/api/documents"));

app.use("/api/docs", require("./routes/api/docs"));

//uploads route
app.use("/api/uploads", require("./routes/api/uploads"));

//file-upload-route
app.use("/api/fileUpload", require("./routes/api/file-upload-route"));

//mentor login route/api
app.use("/api/mentorLogin", require("./routes/api/mentorLogin"));

app.use("/api/userAuth", require("./routes/api/userAuth"));

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
