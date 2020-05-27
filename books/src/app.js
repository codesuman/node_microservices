const app = require("express")();

app.get("/", (req, res) => {
    res.json({ msg: "GET:/ > books" });
});

app.get("/api/v1/books", async (req, res) => {
    res.json({ msg: "GET:/api/v1/books > books" });
});

app.post("/api/v1/books", async (req, res) => {
    res.json({ msg: "POST:/api/v1/books > books" });
});

module.exports = app;
