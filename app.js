require("dotenv/config");
const express = require("express");
const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
    res.send("<h2>Hello there</h2>");
})

app.listen(PORT, () => {
    console.log(`server listening - port ${PORT}`);
})