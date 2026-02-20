const express = require("express");
const app = express();
app.get("/", (_, res) => {
    res.send("hello world");
});

const PORT = process.env.port | 3000;
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    }
    console.log(`Server running at port ${PORT}`);
});
