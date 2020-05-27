const app = require("express")();

app.get("/", (req, res) => {
    res.json({ msg: "GET:/ > Auth" });
});

app.get("/api/v1", async (req, res) => {
    res.json({ msg: "GET:/api/v1 > Auth" });
});

app.get("/api/v1/:val", async (req, res) => {
    console.log(`Auth : ${req.params.val}`);
    res.json({ msg: req.params.val });
});

module.exports = app;
