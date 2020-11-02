const express = require("express");
const cors = require("cors");
const quotes = require("./data/data");
console.log(quotes);
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome" });
});
app.get("/quote", (req, res) => {
  let newQuoote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log("newQuoote", newQuoote);
  return res.json({ status: 200, quote: newQuoote });
});
const port = process.env.PORT || 5000;
app.listen(port, console.log(`app started on port ${port}`));
