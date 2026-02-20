const express = require("express");
const path = require("node:path");

const indexRouter = require("./routes/indexRouter");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.port || 3000;
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    }
    console.log(`Server running at port ${PORT}`);
});
