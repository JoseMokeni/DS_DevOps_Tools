const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 5000

app.use(express.json())

app.post("/tasks", (req, res) => {
  res.status(201).json({ message: "task added successfully" });
});

const environment = process.env.environment || "prod";

if (environment !== "test") {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = app
